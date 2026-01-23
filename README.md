# College Management System

A comprehensive web-based college management system built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides role-based access for students and administrators to manage admissions, fees, results, and more.

## 🚀 Features

### For Students
- **User Registration & Authentication** - Secure login with JWT tokens
- **👤 Student Profile** - View and edit personal information
- **📝 Online Admission Form** - Complete admission process online
- **💰 Fees Payment & History** - Track and manage fee payments
- **📊 View Results / Marksheet** - Access academic performance and semester results
- **📄 Download Admit Card** - Generate and download PDF admit cards
- **📅 Exam Time Table** - View examination schedules and timings
- **📢 Notices & Announcements** - Stay updated with important college notices
- **📚 Subject & Syllabus Info** - Access course curriculum and syllabus details
- **🧾 Download Certificates** - Download enrollment and other certificates
- **🔐 Change Password** - Secure password management
- **Dashboard** - Overview of course information, fee status, and academic progress

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
- **PDFKit** - PDF generation for admit cards and reports
- **ExcelJS** - Excel report generation
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

### Quick Admin Login
For testing and demonstration purposes, you can use the **"🚀 Quick Admin Login (Demo)"** button on the login page, which automatically fills in the admin credentials and logs you in instantly.

## 📁 Project Structure

```
college-management-system/
├── backend/
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── admitCardController.js
│   │   ├── examTimeTableController.js
│   │   ├── feeController.js
│   │   ├── feesController.js
│   │   ├── noticeController.js
│   │   ├── resultController.js
│   │   ├── studentController.js
│   │   └── subjectController.js
│   ├── middleware/
│   │   ├── adminMiddleware.js
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── ExamTimeTable.js
│   │   ├── Fees.js
│   │   ├── Notice.js
│   │   ├── Result.js
│   │   ├── Student.js
│   │   └── Subject.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── admitCardRoutes.js
│   │   ├── examTimeTableRoutes.js
│   │   ├── feeRoutes.js
│   │   ├── feesRoutes.js
│   │   ├── noticeRoutes.js
│   │   ├── resultRoutes.js
│   │   └── studentRoutes.js
│   ├── server.js
│   ├── seedData.js
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
│   │   │   ├── AdmitCard.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── ChangePassword.jsx
│   │   │   ├── ExamTimeTable.jsx
│   │   │   ├── Fees.jsx
│   │   │   ├── Notices.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Results.jsx
│   │   │   └── Subjects.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
└── README.md
```

## �‍💼 Admin Panel Features

### 📊 Dashboard Overview
- **Real-time Statistics**: Total students, approved/rejected/pending admissions
- **Fee Management Overview**: Paid vs pending fees tracking
- **System Metrics**: Results count, active notices, exam schedules
- **Quick Actions**: Direct access to key management functions

### 👨‍🎓 Student Management
- **Comprehensive CRUD Operations**: Add, view, update, and delete student records
- **Advanced Search & Filter**: Search by name/email, filter by course, admission status, fee status
- **Pagination**: Efficient handling of large student databases
- **Bulk Operations**: Approve/reject multiple admissions, update fee statuses

### ✅ Admission Management
- **Status Control**: Approve, reject, or mark admissions as submitted
- **Bulk Processing**: Handle multiple admission requests efficiently
- **Status Tracking**: Real-time updates on admission processing

### 💳 Fee Management
- **Payment Tracking**: Mark fees as paid or pending
- **Financial Overview**: Dashboard statistics for fee collection
- **Payment History**: Track payment dates and amounts
- **Outstanding Balance Monitoring**: Identify students with pending payments

### 📝 Results Management
- **Result Upload**: Add semester-wise results for students
- **Grade Calculation**: Automatic grade assignment based on marks
- **Subject-wise Entry**: Detailed subject marks and performance
- **Result Updates**: Modify existing results when needed

### 🗂️ Admit Card Generation
- **Bulk Generation**: Generate admit cards for multiple students
- **PDF Export**: Professional admit card format
- **Exam Details**: Include date, time, venue, and exam information

### 📣 Notice Management
- **Create Announcements**: Post important notices with priority levels
- **Categorization**: General, exam, fee, and admission-related notices
- **Expiration Management**: Set notice expiry dates
- **Priority System**: High, medium, low priority notifications

### 📅 Exam Management
- **Schedule Creation**: Set up exam time tables by course and semester
- **Subject Scheduling**: Assign dates, times, and venues for each subject
- **Calendar View**: Organized display of examination schedules

### 📄 Report Generation
- **Students Report**: Comprehensive student data export
- **Fees Report**: Detailed fee payment and outstanding balance reports
- **Multiple Formats**: PDF and Excel export options
- **Customizable Reports**: Filter and export specific data sets

### 🔍 Advanced Search & Filtering
- **Multi-criteria Search**: Search across multiple fields simultaneously
- **Dynamic Filters**: Real-time filtering by course, status, fees, etc.
- **Export Filtered Data**: Generate reports from filtered results

### Student Routes
- `POST /api/students/register` - Register new student
- `POST /api/students/login` - Student login
- `GET /api/students/profile` - Get student profile
- `PUT /api/students/update-profile` - Update student profile
- `PUT /api/students/change-password` - Change student password
- `POST /api/students/register-admin` - Register new admin (admin only)
- `POST /api/students/admission` - Submit admission form
- `GET /api/students/results` - Get student results
- `GET /api/students/admit-card` - Download admit card PDF
- `GET /api/students/certificate` - Download enrollment certificate PDF

### Admin Routes (Protected)
- `GET /api/admin/dashboard-stats` - Get dashboard statistics
- `GET /api/admin/students` - Get all students (with search/filter/pagination)
- `PUT /api/admin/students/:id` - Update student status
- `DELETE /api/admin/students/:id` - Delete student
- `POST /api/admin/results` - Add student result
- `PUT /api/admin/results/:id` - Update student result
- `GET /api/admin/reports/students` - Generate students report (PDF/Excel)
- `GET /api/admin/reports/fees` - Generate fees report (PDF/Excel)

### Exam Time Table Routes
- `GET /api/exam-timetable` - Get exam time tables
- `POST /api/exam-timetable` - Create exam time table (admin)
- `PUT /api/exam-timetable/:id` - Update exam time table (admin)
- `DELETE /api/exam-timetable/:id` - Delete exam time table (admin)

### Notices Routes
- `GET /api/notices` - Get all notices
- `POST /api/notices` - Create notice (admin)
- `PUT /api/notices/:id` - Update notice (admin)
- `DELETE /api/notices/:id` - Delete notice (admin)

### Subjects Routes
- `GET /api/subjects` - Get all subjects
- `POST /api/subjects` - Create subject (admin)
- `PUT /api/subjects/:id` - Update subject (admin)
- `DELETE /api/subjects/:id` - Delete subject (admin)

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
