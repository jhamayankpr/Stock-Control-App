# Full-Stack Inventory Management System

A robust, full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) to provide a comprehensive solution for managing inventory. This system allows for secure user authentication and provides full CRUD (Create, Read, Update, Delete) functionality for inventory items.

## 🚀 Live Demo

[Link to your deployed application] ## 📸 Application Preview

![Inventory Dashboard Screenshot](https://user-images.githubusercontent.com/15293235/209420822-03126e08-2510-4355-8818-0599c233267b.png)

## ✨ Key Features

-   **Secure Authentication:** User registration and login with JWT-based sessions.
-   **Password Encryption:** Utilizes `bcrypt` for hashing passwords to ensure user data is secure.
-   **Centralized Dashboard:** An intuitive dashboard to view, search, and manage all inventory items.
-   **Complete CRUD Operations:** Easily add new products, update existing stock details, and remove items.
-   **Responsive Design:** A modern UI built with Next.js and Tailwind CSS, fully responsive for all device sizes.

## 🛠️ Tech Stack

**Frontend:**
* React & Next.js
* Redux Toolkit (for state management)
* Tailwind CSS

**Backend:**
* Node.js & Express.js
* Mongoose (for MongoDB interaction)
* JSON Web Token (JWT) & Bcrypt.js

**Database:**
* MongoDB (with MongoDB Atlas)

## 📦 Installation and Setup

1.  Clone the repository:
    `git clone https://github.com/YourUsername/Your-Repo-Name.git`
2.  Set up the `server/.env` file with your `MONGO_URL` and `JWT_SECRET`.
3.  Run `npm install` in the `root`, `client`, and `server` directories.
4.  Run `npm run dev` from the root directory to start the application.