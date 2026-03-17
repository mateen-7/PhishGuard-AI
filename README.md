🚀 Phish-Guard AI

AI-Powered Phishing Detection System that keeps users safe online in real-time.

🔗 Live Demo: https://phish-guardai-phi.vercel.app

🌍 Problem Statement

Phishing attacks are one of the fastest-growing cybersecurity threats, tricking users into revealing passwords, banking details, and personal information through fake websites.

Many users cannot easily distinguish between legitimate and malicious URLs, leading to financial loss and data breaches.

Phish-Guard AI solves this problem by instantly analyzing URLs using Machine Learning to detect phishing websites before users interact with them.

💡 Solution

Phish-Guard AI provides a simple web interface where users can check any URL.
The system analyzes multiple security and structural features of the URL and uses an AI model to classify it as:

✅ Safe Website
⚠️ Phishing Website

Predictions are generated in real-time with a fast and user-friendly experience.

🧠 How It Works

User Input — User enters a website URL.

Feature Extraction — URL characteristics are analyzed:

URL length

HTTPS usage

Suspicious characters

Domain patterns

Security indicators

AI Prediction — Machine Learning model evaluates risk.

Result Display — Clear safety status shown instantly.

🤖 AI Model Details

Model Type: Machine Learning Classifier (Scikit-learn)

Training Data: Thousands of labeled phishing & legitimate URLs

Features Used:

URL structure analysis

Domain-based indicators

Security protocol checks

Pattern detection

Goal: Fast, lightweight, real-time prediction suitable for web deployment

⚙️ System Architecture
User
  ↓
React Frontend
  ↓
API / Prediction Layer
  ↓
ML Model (Python)
  ↓
Classification Result
  ↓
User Interface
✨ Key Features

🔍 Real-time phishing URL detection

⚠️ Instant malicious site warnings

⚡ Fast AI predictions

📱 Clean & responsive UI

🌐 Live deployment

🧠 Machine Learning powered security

🛠 Tech Stack
Layer	Technology
Frontend	React, TypeScript, Tailwind CSS
Backend	Node.js / Express
AI / ML	Python, Scikit-learn
Build Tool	Vite
Deployment	Vercel
Authentication	Clerk (Optional)
📁 Project Structure
phish-guard-ai/

public/              # Static assets
src/                 # React source code
components/          # UI components
pages/               # Application pages
index.html
package.json
vite.config.ts
tailwind.config.ts
tsconfig.json
README.md

Home Page

URL Detection Result

Phishing Warning Screen

🧪 Local Setup

Clone and run locally:

git clone https://github.com/mateen-7/PhishGuard-AI.git
cd PhishGuard-AI
npm install
npm run dev



🌐 Browser Extension for real-time protection

📩 Email phishing detection

📱 SMS spam classifier integration

🧠 Explainable AI predictions

☁️ Cloud-hosted ML API

🎯 Hackathon Vision

Phish-Guard AI aims to make cybersecurity accessible to everyone by providing an easy-to-use AI tool that helps users verify website safety instantly — reducing phishing risks for everyday internet users.

👨‍💻 Author
Mohammed MuqueetUddin Mateen
Mohammed Mustafa Ali Khan
BTech CSE Students | Full Stack & AI Enthusiast

⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub!
