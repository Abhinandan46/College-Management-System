const Fees = require("../models/Fees");

exports.payFees = async (req, res) => {
  try {
    const fees = await Fees.create({
      studentId: req.user.id,
      amount: 5000,
      paid: true,
      paymentDate: new Date()
    });

    res.json({ msg: "Fees Paid Successfully", fees });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getFeesStatus = async (req, res) => {
  const fees = await Fees.findOne({ studentId: req.user.id });
  res.json(fees);
};
