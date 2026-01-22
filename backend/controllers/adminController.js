const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().select('-password');
    res.json(students);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateStudentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { admissionStatus, feePaid, results } = req.body;
    const student = await Student.findByIdAndUpdate(
      id,
      { admissionStatus, feePaid, results },
      { new: true }
    );
    res.json({ msg: 'Student updated', student });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ msg: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};