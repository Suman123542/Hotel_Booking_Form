
# 🏨 Hotel Booking Form 

## 📌 Project Overview

The **Hotel Booking Form** is a full-stack web application that allows users to reserve hotel rooms online.
Users can select their **check-in date, check-out date, room type**, and provide **personal details** to complete a booking.

This includes

* **MongoDB** for database
* **Express.js** for backend framework
* **React.js** for frontend UI
* **Node.js** for server-side runtime

The main goal of this project is to practice **frontend UI design**, **backend API development**, and **database integration** in a real-world hotel booking scenario.

---

## 🎯 Objectives of the Project

* To design a **responsive hotel booking form UI**
* To validate and store booking data securely in the backend
* To understand **client–server communication**
* To work with **REST APIs**
* To gain hands-on experience with **MERN stack development**

---

## ✨ Features Explained in Detail

### 🔹 Frontend Features

* Attractive **hotel banner image** with overlay text
* Booking form placed below the banner
* Input fields for:

  * Guest Name
  * Email Address
  * Phone Number
  * Check-in Date
  * Check-out Date
  * Room Type selection
* Responsive layout (works on mobile, tablet, desktop)
* Clean design using **Tailwind CSS & Flowbite**
* Confirmation screen shown after successful reservation

---

### 🔹 Backend Features

* REST API built with **Express.js**
* Proper request handling and validations
* Booking data stored in **MongoDB**
* Structured folder system (routes, controllers, models)
* Environment variables used for security
* CORS configuration for frontend-backend communication

---

## 🧰 Technologies Used (With Purpose)

### 🖥️ Frontend

| Technology                | Purpose                        |
| ------------------------- | ------------------------------ |
| React (Vite)              | Component-based UI development |
| Tailwind CSS              | Utility-first styling          |
| Flowbite / Flowbite-React | Pre-built UI components        |
| Axios                     | HTTP requests to backend       |

---

### 🛠️ Backend

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | Server runtime                  |
| Express.js | Backend framework               |
| MongoDB    | NoSQL database                  |
| Mongoose   | MongoDB object modeling         |
| dotenv     | Environment variable management |
| CORS       | Cross-origin request handling   |

---

## 📁 Project Folder Structure (Detailed)

```
Hotel-Booking-Form/
│
├── UI/                         # Frontend (React)
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Page-level components
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   │
│   ├── public/                 # Static assets
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js
│
├── backend/                    # Backend (Node + Express)
│   ├── controllers/            # Business logic
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API routes
│   ├── database/               # DB connection
│   ├── server.js               # Main server file
│   └── package.json
│
├── .gitignore                  # Ignored files
└── README.md                   # Project documentation

## 🚀 Future Enhancements

* User authentication (Login / Signup)
* Admin dashboard to manage bookings
* Email confirmation after booking
* Payment gateway integration
* Room availability checking

## 📚 Learning Outcomes

* Learned full MERN stack workflow
* Improved React component structure
* Understood REST API design
* Practiced MongoDB schema modeling
* Learned Git & GitHub best practices


Just tell me what you need next 😊
