const Task = require("../controllers/taskoperations");
const Auth = require("../controllers/auth");
const { verifyuser } = require("../middleware/authmiddleware");
const { check, validationResult } = require("express-validator");
const express = require("express");
const cors = require("cors");
const router = express.Router();

router.use(cors());

//authentication
router.post("/login", Auth.login);
router.post(
  "/signup",
  [
    check("username", "Name is required").notEmpty(),
    check("email", "Valid email is required").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("phone", "Phone is required and must be 10 digits").isLength({
      min: 10,
      max: 10,
    }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  Auth.signup
);

// task end points
router.post("/tasks", verifyuser, Task.postTask);
router.get("/tasks", verifyuser, Task.getTask);
router.get("/tasks/:id", verifyuser, Task.getTaskbyId);
router.put("/tasks/:id", verifyuser, Task.updateTaskbyId);
router.delete("/tasks/:id", verifyuser, Task.deleteTaskbyId);
router.get("/search/:text", Task.searchbyTitle);
module.exports = router;
