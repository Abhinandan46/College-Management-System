const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { addResult, getMyResult } = require("../controllers/resultController");

router.post("/add", addResult); // admin
router.get("/my", auth, getMyResult);

module.exports = router;
