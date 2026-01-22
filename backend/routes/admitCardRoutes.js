const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { generateAdmit } = require("../controllers/admitCardController");

router.get("/download", auth, generateAdmit);

module.exports = router;
