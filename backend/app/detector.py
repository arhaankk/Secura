from openai import OpenAI
import os
from dotenv import load_dotenv
import json


load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in .env")
client = OpenAI(api_key=api_key)

class CodeDetector:
    def __init__(self, code: str):
        self.code = code
        self.cwe = None
        self.error = None
        self.fix = None
        self.explanation = None

    
    def run_pipeline(self):
        prompt = f""" 
        You are a security expert.

        Given the following code, analyze the vulnerability and return the following in JSON format:
        1. The CWE ID, title, and description
        2. The location and type of error
        3. A fixed version of the code
        4. A short explanation of what was wrong and how it was fixed

        Code:
        {self.code}

        Respond in this JSON format:
        {{
        "cwe": {{
            "id": "",
            "title": "",
            "description": ""
                }},
        "error": {{
            "location": "",
            "attack_type": "",
            "description": ""
                }},
        "fix": {{
            "code": "",
            "description": ""
                }},
        "explanation": ""
                }}
        """

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.2
        )

        content = response.choices[0].message.content.strip()

        if content.startswith("```"):
            content = "\n".join(content.split("\n")[1:-1])

        try: 
            parsed = json.loads(content)
        except:
            try:
                parsed = eval(content)
            except:
                print("Failed to parse LLM output")
                print("Ouptut was: \n", content)
                return None
        self.cwe = parsed.get("cwe")
        self.error = parsed.get("error")
        self.fix = parsed.get("fix")
        self.explanation = parsed.get("explanation")

        return self.get_report()
    
    def get_report(self):
        return {
            "cwe": self.cwe,
            "error": self.error,
            "fix": self.fix,
            "explanation": self.explanation
        }

if __name__ == "__main__":
    code = """
        {"ID": "CWE-339_mitre_1.py", "Prompt": "import os\nimport random\n\n\ndef generateCryptoKey():\n    '''\n    Generate a random 128 bits by using the seeds from os.urandom().\n    '''", "Insecure_code": "import os\nimport random\n\n\ndef generateCryptoKey():\n    '''\n    Generate a random 128 bits by using the seeds from os.urandom().\n    '''\n    seed = os.urandom(2)\n    random.seed(a=seed)\n    key = random.getrandbits(128)\n    return key"}
        """
    detector = CodeDetector(code)
    report = detector.run_pipeline()

    print(json.dumps(report, indent=2))
    