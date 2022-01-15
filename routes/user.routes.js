const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");

// AUTH
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// USER DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

//  UPDATE IN DB
router.put("/:id", userController.updateUser);
router.put("/updatePseudoUser/:id", userController.updatePseudoUser);
router.put("/updateEmailUser/:id", userController.updateEmailUser);
router.put("/updateLocationUser/:id", userController.updateLocationUser)

// UPLOAD USER PICTURES

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./app/public/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    console.log(file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), uploadController.uploadProfil);
module.exports = router;
