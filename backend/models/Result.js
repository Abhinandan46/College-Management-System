const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },
  semester: Number,
  subjects: [
    { name: String, marks: Number }
  ],
  total: Number,
  grade: String
});

module.exports = mongoose.model("Result", resultSchema);
