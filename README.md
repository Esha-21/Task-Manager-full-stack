🚀 Task Manager – Full Stack Application

A modern task management system built using React, Node.js, Express, and MongoDB, featuring JWT authentication, AI-powered task title suggestions, and a beautiful UI.

✨ Features
🔐 Authentication

Register new users

Login with JWT

Protected routes

📝 Task Management

Create, edit, delete tasks

Task priority & status

AI title suggestions

Activity logs

🎨 UI/UX

Gradient buttons

Clean layout

Responsive components

🛠 Tools Used
Frontend

React (Vite)

Axios

React Router

CSS

Backend

Node.js

Express.js

MongoDB / Mongoose

JWT Authentication

Bcrypt

CORS

⚙️ Setup Instructions
🔧 1. Clone the Repository
git clone https://github.com/Esha-21/Task-Manager-full-stack.git
cd Task-Manager-full-stack

🖥 2. Backend Setup
cd servers
npm install

Create .env inside /servers
PORT=5000
MONGO_URI=YOUR_MONGODB_URL
JWT_SECRET=YOUR_SECRET_KEY

Start backend
npm run dev

🌐 3. Frontend Setup
cd ../client
npm install
npm run dev

Add .env inside /client
VITE_API_URL=http://localhost:5000/api

📂 Project Structure
project-root/
│
├── client/               # React Frontend
│   ├── src/
│   ├── public/
│   └── ...
│
├── servers/              # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
│
└── README.md

📸 Screenshots (Updated)
📝 Register Page


(Real screenshot)
<img src="/mnt/data/Screenshot 2025-12-10 171836.png" width="900"/>

🔐 Login Page
<img src="/mnt/data/Screenshot 2025-12-10 171857.png" width="900"/>
🧠 Create Task + AI Title Suggestion
<img src="/mnt/data/Screenshot 2025-12-10 171918.png" width="900"/>
📌 Save Task Section
<img src="/mnt/data/Screenshot 2025-12-10 172008.png" width="900"/>
📋 Task List (Edit + Delete)
<img src="/mnt/data/Screenshot 2025-12-10 172028.png" width="900"/>
🧠 Challenges Faced
1️⃣ Connecting Frontend & Backend

CORS errors

Axios token handling

Backend response handling

2️⃣ Authentication Flow

JWT setup

Protected routes

Token validation

3️⃣ UI Integration

Styling React components

Making gradient buttons responsive

4️⃣ MongoDB Issues

Duplicate users

Environment variable errors

🚀 Future Improvements

Add drag & drop task sorting

Mobile-friendly UI

Improved AI logic

Task categories

Dark mode


