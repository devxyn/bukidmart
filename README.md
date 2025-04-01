# BukidMart

> **Farm-fresh goodness delivered to your doorstep**

## 🛒 About BukidMart

BukidMart is a full-stack e-commerce platform that connects farmers with consumers, ensuring fresh and organic products reach your home conveniently. Built with the **MERN stack** (MongoDB, Express.js, React, Node.js), BukidMart offers a seamless shopping experience with secure authentication, real-time cart updates, and smooth checkout processes.

## 🚀 Features

- 🥦 **Browse & Buy Fresh Produce**
- 🛍️ **User Authentication (Register/Login with JWT)**
- 🛒 **Cart Management & Checkout (To be implemented)**
- 💳 **Secure Payments with Stripe (To be implemented)**
- 📦 **Order Tracking (To be implemented)**
- 🌍 **Responsive & Mobile-Friendly UI**

## 🏗️ Tech Stack

- **Frontend:** React (Vite, TypeScript, Tailwind CSS, Daisy UI)
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **State Management:** Redux Toolkit (RTK Query, Redux Persist)
- **Authentication:** JWT (JSON Web Token)
- **Payments:** Stripe (To be implemented)

## 📂 Folder Structure

```
BukidMart/
├── client/        # Frontend (React + Vite + TypeScript)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── config/
│   │   ├── data/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── tsconfig.json
│   └── package.json
│
├── server/            # Backend (Node.js + Express)
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── README.md
└── package.json
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/devxyn/bukidmart.git
cd bukidmart
```

### 2️⃣ Install Dependencies

#### Frontend (Client)

```sh
cd client
npm install
```

#### Backend (Server)

```sh
cd ../server
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory with the necessary environment variables. Check the `.env.example` file for reference.

### 4️⃣ Start the Application

#### Run the Backend (Server)

```sh
cd server
npm run dev
```

#### Run the Frontend (Client)

```sh
cd client
npm run dev
```

---

**👨‍💻 Developed by [devxyn](https://github.com/devxyn)**
