const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    success: true,
    message: "User registered successfully",
    user: {
      name,
      email
    }
  });
});

router.post("/login", (req, res) => {
  const { email } = req.body;

  res.json({
    success: true,
    message: "User logged in successfully",
    email
  });
});

module.exports = router;