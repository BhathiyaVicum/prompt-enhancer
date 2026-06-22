# 🚀 Prompt Perfector

A modern React web application that enhances raw user prompts into clear, structured, and effective AI-ready prompts using the **Groq API (LLaMA 3.3 70B)**.  
Built with **React + Tailwind CSS** and deployed on **Vercel**.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel)
![Groq](https://img.shields.io/badge/Groq-API-FF6600?style=flat&logo=groq)

---

## 🌐 Live Demo
👉 https://prompt-enhancer-web-rosy.vercel.app/

---

## 📸 Preview

<img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/a14b4eb9-a30c-41ec-ad77-25a8102d1b2c" />

--

<img width="1903" height="830" alt="image" src="https://github.com/user-attachments/assets/de092524-1ef7-45fa-a131-7622ac4eafea" />

---

## ✨ Features

- **🤖 AI-Powered Enhancement:** Instantly rewrites prompts using Groq (LLaMA 3.3 70B) for better structure and clarity.
- **📜 History System:** Local storage integration to keep track of your last 10 prompts.
- **⚡ Fast & Responsive:** Built with Vite and Tailwind CSS for a seamless mobile and desktop experience.
- **📋 One-Click Actions:** Easily copy results to clipboard or clear the workspace.
- **⏳ Visual Feedback:** Interactive loading animations and character counting (500-character limit).
- **🌙 Modern UI:** Sleek dark-themed design with glassmorphism effects.

---

## 🧠 How It Works

1. **Input:** User enters a raw, rough prompt.
2. **Process:** The app calls the Groq API using the `llama-3.3-70b-versatile` model.
3. **Enhance:** The AI applies prompt engineering techniques to add context and constraints.
4. **Result:** The user receives a professional-grade prompt ready for use in any LLM.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **API:** Groq Cloud API
- **Deployment:** Vercel

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js
- npm
- A [Groq API Key](https://console.groq.com/)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/BhathiyaVicum/prompt-enhancer.git
cd prompt-enhancer

# 2. Install dependencies
npm install

# 3. Environment Setup
# Create a .env file in the root directory and add:
VITE_GROQ_API_KEY=your_groq_api_key_here

# 4. Start development server
npm run dev

# 5. Build for production
npm run build
