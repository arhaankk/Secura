# 🛡️ Secura: Code Vulnerability Detection & Auto-Fix Demo

**An LLM-powered tool to detect, fix, and explain code vulnerabilities — with a strong focus on usability.**

---


<!-- Once you upload your video, embed it like this:
[![Watch the video](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/maxresdefault.jpg)](https://youtu.be/YOUTUBE_VIDEO_ID)
-->

---

## 🔍 Overview

**Secura** is a demo application built for the offline evaluation of the [SecurityEval Dataset](https://s2e-lab.github.io/preprints/msr4ps22-preprint.pdf). It utilizes prompt-engineered LLMs (using GPT-4o) to:
- **Detect** security vulnerabilities in code samples
- **Identify** CWE types and attack vectors
- **Generate** a fixed version of the code
- **Explain** the vulnerability and the applied fix

The project emphasizes **usability** by providing a straightforward, intuitive web interface along with clear, structured analysis output.

---

## 🧠 How It Works

1. A user inputs potentially vulnerable code through the web interface.
2. The code is submitted to a Flask backend via a REST API.
3. The backend leverages OpenAI's GPT-4o with a structured prompt in the `CodeDetector` class.
4. The LLM returns a JSON report containing:
   - CWE ID, title, and description
   - Vulnerability location and attack type
   - Fixed code along with fix details
   - A concise explanation of the detected vulnerability and the remediation applied
5. The frontend displays the results clearly for the user.

---

## 📂 Project Structure

```bash
secura/
├── frontend/               # ReactJS + Tailwind frontend
│   ├── components/         # InputForm, OutputCard, etc.
│   ├── main.jsx            # Main app logic
│   └── home.jsx            # Landing page with start button
│
├── backend/                # Flask backend
│   ├── main.py             # API server
│   ├── detector.py         # LLM interaction and vulnerability analysis
│   └── .env                # Environment variables including your OpenAI API key
│
└── README.md               # Project documentation

```
# 🚀 Getting Started

## 🔧 Requirements
- **Node.js (v18+)**
- **Python 3.10+**
- **OpenAI API Key** (to be set in `.env` as `OPENAI_API_KEY`)

## 🖥️ Backend Setup
1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```
2. **Create and activate a virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   ```
3. **Install the required packages:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Set your OpenAI API key:**
   ```bash
   echo "OPENAI_API_KEY=your-key-here" > .env
   ```
5. **Run the Flask server:**
   ```bash
   python main.py
   ```

## 🌐 Frontend Setup
1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```
2. **Install the Node dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Ensure the Flask server is running at:** [http://localhost:8000](http://localhost:8000)

## 🧪 Sample Result Format
Below is an example of the JSON format returned by the backend:

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

## ✨ Features
- **LLM-Powered Analysis:** Utilizes GPT-4o for vulnerability detection and remediation.
- **CWE-Based Classification:** Clearly identifies vulnerabilities via CWE IDs, titles, and descriptions.
- **Automated Code Fixing:** Generates a fixed version of the provided code.
- **User-Friendly Explanations:** Offers concise explanations for detected vulnerabilities and applied fixes.
- **Intuitive Interface:** Built with React, Tailwind CSS, and Framer Motion for a smooth user experience.

## 🛠️ Technologies Used
- **Frontend:** React.js, Tailwind CSS, Framer Motion, Vite
- **Backend:** Flask, Flask-RESTX, OpenAI API, dotenv
- **Model:** GPT-4o by OpenAI
