# College Management System

A comprehensive web-based college management system built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides role-based access for students and administrators to manage admissions, fees, results, and more.

## 🚀 Features

### For Students
- **User Registration & Authentication** - Secure login with JWT tokens
- **Dashboard** - Overview of course information, fee status, and academic progress
- **Admission Management** - Automatic approval upon registration
- **Fee Management** - Track and manage fee payments
- **Results** - View academic performance and semester results
- **Admit Card Generation** - Download PDF admit cards

### For Administrators
- **Admin Panel** - Complete student management interface
- **Student CRUD Operations** - Create, read, update, and delete student records
- **Admission Status Management** - Approve or reject student admissions
- **Fee Status Tracking** - Monitor student fee payments
- **Admin Creation** - Create additional administrator accounts
- **System Overview** - Comprehensive view of all students and their statuses

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **PDFKit** - PDF generation for admit cards
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Custom CSS** - Modern, responsive styling with animations

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd college-management-system
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/college-management
JWT_SECRET=your-secret-key-here
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 4. Access the Application
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

## 👤 Default Admin Credentials

- **Email:** admin@college.edu
- **Password:** admin123

## 📁 Project Structure

```
college-management-system/
├── backend/
│   ├── controllers/
│   │   ├── adminController.js
│   │   └── studentController.js
│   ├── middleware/
│   │   └── adminMiddleware.js
│   ├── models/
│   │   └── Student.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   └── studentRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdmissionForm.jsx
│   │   │   ├── Fees.jsx
│   │   │   ├── Results.jsx
│   │   │   └── AdmitCard.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
└── README.md
```

## 🔐 API Endpoints

### Student Routes
- `POST /api/students/register` - Register new student
- `POST /api/students/login` - Student login
- `GET /api/students/profile` - Get student profile
- `POST /api/students/register-admin` - Register new admin (admin only)

### Admin Routes (Protected)
- `GET /api/admin/students` - Get all students
- `PUT /api/admin/students/:id` - Update student status
- `DELETE /api/admin/students/:id` - Delete student

### Document Routes
- `GET /api/students/admit-card` - Download admit card PDF

## 🎨 Features Overview

### Authentication System
- JWT-based authentication
- Role-based access control (Student/Admin)
- Secure password hashing
- Automatic admin creation on first run

### Modern UI/UX
- Responsive design
- Glass-morphism effects
- Smooth animations
- Intuitive navigation
- Mobile-friendly interface

### Data Management
- MongoDB for flexible data storage
- Mongoose schemas for data validation
- RESTful API design
- Error handling and validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email abhinandansahore46@gmail.com or create an issue in the repository.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by real-world college management needs
- Designed for educational institutions