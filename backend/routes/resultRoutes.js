const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const { addResult, getMyResult, uploadResult, uploadResultForStudent, downloadResult } = require("../controllers/resultController");

router.post("/add", addResult); // admin
router.post("/upload", auth, admin, uploadResult, uploadResultForStudent);
router.get("/my", auth, getMyResult);
router.get("/download/:id", auth, downloadResult);

module.exports = router;
