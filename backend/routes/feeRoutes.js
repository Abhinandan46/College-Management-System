const express = require('express');
const { getFeeStatus, payFees } = require('../controllers/feeController');
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get('/status', auth, getFeeStatus);
router.post('/pay', auth, payFees);

module.exports = router;