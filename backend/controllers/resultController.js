const Result = require("../models/Result");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../uploads/results");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Middleware for uploading
exports.uploadResult = upload.single("result");

// Upload result for a student
exports.uploadResultForStudent = async (req, res) => {
  try {
    const { studentId, semester } = req.body;
    if (!req.file) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    const result = await Result.create({
      studentId,
      semester,
      filePath: req.file.path
    });

    res.json({ msg: "Result uploaded successfully", result });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addResult = async (req, res) => {
  const { studentId, semester, subjects } = req.body;

  const total = subjects.reduce((sum, s) => sum + s.marks, 0);
  const grade = total > 250 ? "A" : total > 180 ? "B" : "C";

  const result = await Result.create({
    studentId,
    semester,
    subjects,
    total,
    grade
  });

  res.json({ msg: "Result added", result });
};

exports.getMyResult = async (req, res) => {
  const results = await Result.find({ studentId: req.user.id });
  res.json(results);
};

exports.downloadResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result || result.studentId.toString() !== req.user.id || !result.filePath) {
      return res.status(404).json({ msg: 'Result not found' });
    }
    res.download(result.filePath);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
