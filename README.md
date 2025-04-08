# 🛡️ Secura: Code Vulnerability Detection & Auto-Fix Demo

> **An LLM-powered tool to detect, fix, and explain code vulnerabilities — with a strong emphasis on usability and clarity.**

---

<!-- 📽️ To add a demo video, embed like so:
[![Watch the video](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg)](https://youtu.be/YOUTUBE_VIDEO_ID)
-->

---

## 🔍 Overview

**Secura** is a demo application developed for offline evaluation of the [SecurityEval Dataset](https://s2e-lab.github.io/preprints/msr4ps22-preprint.pdf). It leverages OpenAI’s GPT-4o to:

- **Detect** security vulnerabilities in source code  
- **Classify** them using CWE IDs and detailed descriptions  
- **Generate** secure, fixed versions of the code  
- **Explain** vulnerabilities and applied remediations in plain English

> Built for speed, clarity, and developer-friendly interaction.

---

## How It Works

1. A user submits potentially vulnerable code via a web interface.
2. The code is sent to the backend (Flask) through a RESTful API.
3. The backend calls GPT-4o with a structured prompt using the `CodeDetector` module.
4. GPT-4o analyzes the code and returns a structured JSON response with:
   - CWE information (ID, title, description)
   - Error location and attack type
   - Fixed code with a description of changes
   - A clear explanation of the issue and how it was resolved
5. The frontend elegantly displays all returned data to the user.

---

## Project Structure

```bash
secura/
├── frontend/               # ReactJS + Tailwind frontend
│   ├── components/         # InputForm, OutputCard, etc.
│   ├── main.jsx            # Main app logic
│   └── home.jsx            # Landing page with UI intro
│
├── backend/                # Flask backend
│   ├── main.py             # REST API server
│   ├── detector.py         # LLM interaction logic
│   └── .env                # OpenAI API key and environment settings
│
└── README.md               # Project documentation 
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Python](https://www.python.org/downloads/) 3.10+
- OpenAI API key (saved as `OPENAI_API_KEY` in a `.env` file)

---

### Backend Setup

```bash
# Step 1: Navigate to the backend directory
cd backend

# Step 2: Set up and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Step 3: Install dependencies
pip install -r requirements.txt

# Step 4: Add your OpenAI key to .env
echo "OPENAI_API_KEY=your-key-here" > .env

# Step 5: Run the Flask server
python main.py
```

---

### Frontend Setup

```bash
# Step 1: Navigate to the frontend directory
cd frontend

# Step 2: Install dependencies
npm install

# Step 3: Start the development server
npm run dev
```

> Make sure the backend is running at [http://localhost:8000](http://localhost:8000)

---

## Sample Output (JSON)

Here’s an example of the structured JSON output from the backend:

```json
{
  "cwe": {
    "id": "CWE-330",
    "title": "Use of Insufficiently Random Values",
    "description": "The use of a predictable seed in a random number generator can lead to vulnerabilities."
  },
  "error": {
    "location": "Line 9",
    "attack_type": "Insecure Random",
    "description": "The predictable seed allows attackers to replicate key generation."
  },
  "fix": {
    "code": "/* Fixed code here */",
    "description": "Replaced the insecure RNG with a cryptographically secure alternative."
  },
  "explanation": "The original code used a seeded random generator, which is predictable. The fix ensures a secure, random key is generated."
}
```

---

## Key Features

- **LLM-Powered Analysis** — Uses GPT-4o for vulnerability detection and explanation  
- **CWE Classification** — Organizes results using industry-standard CWE taxonomy  
- **Auto-Generated Fixes** — Suggests and explains secure alternatives to the input code  
- **Human-Readable Summaries** — Converts complex issues into understandable narratives  
- **Elegant Interface** — Built with React, Tailwind CSS, and Framer Motion for a seamless UX

---

## Tech Stack

| Layer      | Technologies Used                                    |
|------------|------------------------------------------------------|
| Frontend   | React.js, Tailwind CSS, Framer Motion, Vite          |
| Backend    | Flask, Flask-RESTX, OpenAI API, Python-dotenv        |
| AI Model   | GPT-4o (via OpenAI API)                              |

---

## License

This project is for demonstration and educational purposes only. All rights to dataset and model usage belong to their respective owners.

---

> Made with ❤️ by Arhaan Khaku
