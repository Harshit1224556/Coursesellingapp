📚 Course Selling App (Backend)

A RESTful backend application for a course-selling platform where admins can create and manage courses and users can browse, purchase, and access enrolled courses.
Built using Node.js, Express.js, MongoDB, and JWT authentication with a clean and scalable architecture.

🚀 Features
👤 User Features

User Registration & Login (JWT based authentication)

Secure password hashing using bcrypt

View all available courses

Purchase / Enroll in courses

View purchased courses

Protected routes using middleware

🛠️ Admin Features

Admin Registration & Login

Create new courses

Update course details (price, title, description, etc.)

Delete courses

View all users and course data (optional)

🔐 Authentication & Security

JWT-based authentication

Role-based access control (Admin / User)

Middleware to protect routes

Environment variables for sensitive data

🧠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: JWT (JSON Web Token)

Security: bcrypt, dotenv

Architecture: MVC pattern

API Type: REST API

📁 Project Structure
course-selling-app/
│
├── controllers/
│   ├── authController.js
│   ├── courseController.js
│   └── userController.js
│
├── models/
│   ├── User.js
│   └── Course.js
│
├── routes/
│   ├── authRoutes.js
│   ├── courseRoutes.js
│   └── userRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
├── package.json
└── README.md

🔄 API Endpoints (Sample)
Auth Routes
Method	Endpoint	Description
POST	/api/auth/signup	Register user/admin
POST	/api/auth/login	Login user/admin
Course Routes
Method	Endpoint	Access
POST	/api/course/create	Admin
PUT	/api/course/update/:id	Admin
DELETE	/api/course/delete/:id	Admin
GET	/api/course/all	Public
GET	/api/course/purchased	User
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/course-selling-app.git
cd course-selling-app

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4️⃣ Run the Server
npm start


Server will run on:

http://localhost:3000

🧪 Testing

You can test APIs using:

Postman

Thunder Client

REST Client VS Code Extension

🌱 Future Enhancements

Payment gateway integration (Razorpay / Stripe)

Course progress tracking

Video streaming support

Admin dashboard

Frontend integration (React / Next.js)

🤝 Contribution

Contributions are welcome!
Feel free to fork the repo, create a branch, and submit a PR.

📌 Author

Harshit Kumar
Aspiring Full Stack Developer 🚀


📎 LinkedIn: https://www.linkedin.com/in/harshit91sharma/
