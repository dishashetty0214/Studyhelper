# 🧠 StudyHelper – AI Study Assistant

A simple full-stack web app that uses **Google Gemini AI** to help students generate summaries, explanations, and answers for study topics.

---

## 🚀 Features

- 💬 Ask any question — get AI-generated responses instantly  
- ⚡ Real-time communication between frontend and backend  
- 🔐 Secure Gemini API integration (API key stored in `.env`)  
- 🧩 Clean modular project structure (React + Express)  

---

## 📂 Folder Structure

StudyHelper/
│
├── backend/
│ ├── index.js # Express backend entry
│ ├── routes/
│ │ └── generate.js # Gemini API call route
│ ├── utils/
│ │ └── geminiClient.js # Gemini client setup
│ ├── .env # Contains GEMINI_API_KEY (ignored by git)
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ └── App.js # Main React app
│ ├── public/
│ └── package.json
│
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/StudyHelper.git
cd StudyHelper
2️⃣ Setup the Backend
bash
Copy code
cd backend
npm install
Create a .env file inside the backend/ folder:

ini
Copy code
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=4000
Start the backend:

bash
Copy code
npm start
✅ Expected output:

arduino
Copy code
✅ Gemini client initialized
🚀 Backend running on port 4000
3️⃣ Setup the Frontend
bash
Copy code
cd ../frontend
npm install
npm start
The frontend should open automatically at:
👉 http://localhost:3000

💡 Usage
Type your question or topic (e.g., “Explain Newton’s laws”)

Click Generate

Get instant explanations or summaries from Gemini AI

🧰 Tech Stack
Layer	Technology
Frontend	React.js
Backend	Express.js
AI Model	Google Gemini API
Environment	Node.js + npm

🔐 Environment Variables
Create a .env file inside /backend with:

ini
Copy code
GEMINI_API_KEY=your_google_gemini_api_key
PORT=4000
⚠️ Do not commit .env — it’s excluded by .gitignore

❗ Troubleshooting
Problem	Possible Cause	Solution
500 (Internal Server Error)	Wrong API key or missing .env	Check your .env and API key
TypeError: request is not iterable	Wrong payload format	Use correct Gemini request format in generate.js
CORS Error	Cross-origin issue	Ensure app.use(cors()) is enabled in index.js

🤝 Contributing
Contributions are welcome!

Fork the repo

Create a new branch (git checkout -b feature/new-feature)

Commit changes (git commit -m "Added new feature")

Push branch (git push origin feature/new-feature)

Open a Pull Request

🧾 License
This project is licensed under the MIT License.

✨ Author
Developed by Your Name
Powered by Google Gemini API 💫

yaml
Copy code


---

Would you like me to add **deployment instructions (Render for backend + Vercel for frontend)** at the bottom so it’s ready to host online?
