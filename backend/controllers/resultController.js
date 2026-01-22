const Result = require("../models/Result");

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
  const result = await Result.findOne({ studentId: req.user.id });
  res.json(result);
};
