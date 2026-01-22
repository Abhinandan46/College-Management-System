const express = require('express');
const { getAllStudents, updateStudentStatus, deleteStudent } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const router = express.Router();

router.get('/students', auth, admin, getAllStudents);
router.put('/students/:id', auth, admin, updateStudentStatus);
router.delete('/students/:id', auth, admin, deleteStudent);

module.exports = router;