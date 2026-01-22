const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const PDFDocument = require('pdfkit');

exports.registerStudent = async (req, res) => {
    const { name, email, password, course } = req.body;
    try {
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newStudent = new Student({ name, email, password: hashedPassword, course });
        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await Student.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Student({ name, email, password: hashedPassword, role: 'admin' });
        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.loginStudent = async (req, res) => {
    const { email, password } = req.body;
    try {
        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: student._id, role: student.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};  
exports.submitAdmission = async (req, res) => {
  try {
    const { address, phone, dob } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.user.id,
      { address, phone, dob, admissionStatus: "Submitted" },
      { new: true }
    );

    res.json({ msg: "Admission submitted", student });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select("-password");
    res.json(student);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getResults = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select("results");
    res.json(student.results);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.downloadAdmitCard = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id);

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${student.name}_admit_card.pdf`);

    doc.pipe(res);

    doc.fontSize(20).text('College Admit Card', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Name: ${student.name}`);
    doc.text(`Email: ${student.email}`);
    doc.text(`Course: ${student.course}`);
    doc.text(`Admission Status: ${student.admissionStatus}`);
    doc.moveDown();
    doc.text('Exam Date: To be announced');
    doc.text('Venue: College Campus');

    doc.end();
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
