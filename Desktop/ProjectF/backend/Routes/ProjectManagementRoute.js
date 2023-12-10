const router = require("express").Router();
const upload = require("../Middleware/upload");

const {
  signup,
  login,
  uploadProject,
  updateProjectProduct,
  deleteProjectProduct,
} = require("../Controller/ProjectManagement");

router.post("/signup", signup);
router.post("/login", login);
router.post("/upload", upload, uploadProject);
router.put("/update/:title", updateProjectProduct);
router.delete("/delete/:title", deleteProjectProduct);

module.exports = router;
