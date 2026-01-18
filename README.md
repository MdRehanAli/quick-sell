# 🛒 QuickSell | Buy, Sell & Discover Products Easily

## 🏷️ Project Theme:

**QuickSell** is a modern and user-friendly **peer-to-peer marketplace web application** built using **Next.js (App Router)** and **Express.js**.
The platform allows users to **browse products publicly**, while **authenticated users can sell products** through a protected interface.
QuickSell focuses on simplicity, speed, and real-world full-stack development practices.

---

## 🎯 Purpose:

The main goal of **QuickSell** is to create a **simple selling platform** where people can easily list products for sale and explore available products without mandatory login.
This project demonstrates:

* Public and protected routing
* Mock authentication using cookies
* API-based data fetching and submission
* Clean UI and responsive design

---

## 🔗 Live Link:
[👉 Visit QuickSell Website](https://quick-sell24.vercel.app/)

---

## 🔐 Demo Login Credentials:

```
Email: quicksell@gmail.com
Password: QuickSell
```

---

## 🛍️ Key Features:

* 🏠 **Landing Page:** Clean landing page with 7 structured sections (excluding navbar & footer).
* 🔐 **Mock Authentication:** Hardcoded login system using cookies for session management.
* 🛒 **Browse Products:** Public product listing page with product cards.
* 📄 **Product Details:** View full product details including description, price, and image.
* ➕ **Sell Product (Protected):** Logged-in users can add products for sale.
* 🔒 **Protected Routes:** Unauthorized users are redirected to the login page.
* 🔔 **Toast Notifications:** Success notification after adding a product.
* 📱 **Responsive Design:** Fully responsive across mobile, tablet, and desktop devices.

---

## 🧭 Route Overview:

| Route            | Description                   |
| ---------------- | ----------------------------- |
| `/`              | Landing Page                  |
| `/login`         | Login Page                    |
| `/items`      | Product Listing Page (Public) |
| `/items/[id]` | Product Details Page (Public) |
| `/add-item`  | Add Item Page (Protected) |

---

## ⚙️ Technologies Used:

### Frontend:

* **Next.js 15/16 (App Router)**
* **React.js**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **Cookie-based Authentication**
* **React Toastify**

### Backend:

* **Node.js**
* **Express.js**
* **REST API**
* **JSON / Database for Product Storage**

---

## 📦 NPM Packages Used (Client Side):

* `next`
* `react`
* `react-dom`
* `tailwindcss`
* `js-cookie`
* `react-toastify`

---

## 📦 NPM Packages Used (Server Side):

* `express`
* `cors`
* `dotenv`
* `uuid`

---

## 🧪 Setup & Installation:

### Frontend Setup:

```bash
npm install
npm run dev
```

### Backend Setup:

```bash
npm install
npm start
```

---

## 🚀 Future Enhancements:

* User registration system
* Real authentication (NextAuth.js)
* Product edit & delete functionality
* Image upload support
* Seller dashboard
* Category-based filtering

---

## 🏆 Conclusion:

**QuickSell** is a lightweight yet practical marketplace application that showcases **modern full-stack development concepts**, including authentication, protected routes, API integration, and responsive UI using **Next.js and Express.js**.