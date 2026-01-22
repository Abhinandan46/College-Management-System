const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.generateAdmit = (req, res) => {
  const doc = new PDFDocument();
  const file = "admitcard.pdf";

  doc.pipe(fs.createWriteStream(file));

  doc.fontSize(20).text("College Admit Card", { align: "center" });
  doc.moveDown();
  doc.text(`Name: ${req.user.id}`);
  doc.text("Exam: Semester Exam");
  doc.text("Date: 10 March 2026");

  doc.end();

  res.download(file);
};
