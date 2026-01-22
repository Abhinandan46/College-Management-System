const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const studentRoutes = require('./routes/studentRoutes');
const feeRoutes = require('./routes/feeRoutes');
const adminRoutes = require('./routes/adminRoutes');
const app = express();
app.use(cors());
app.use(express.json());

const Student = require('./models/Student');
const bcrypt = require('bcryptjs');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected🥳🥳");
    // Create default admin if none exists
    const adminExists = await Student.findOne({ role: 'admin' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const defaultAdmin = new Student({
        name: 'Default Admin',
        email: 'admin@college.com',
        password: hashedPassword,
        role: 'admin'
      });
      await defaultAdmin.save();
      console.log("Default admin created: admin@college.com / admin123");
    }
  })
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("College Management API Running");
});

app.use('/api/students', studentRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port localhost:${process.env.PORT}`));  