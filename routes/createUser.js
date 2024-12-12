//create users
const express = require("express");
const router = express.Router();
const User = require("../model/mongoosSchema");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "Myshdrfdetgdbcghgwxxxycxedcvwdyv##hsgdhsdgvwsv";
router.post(
  "/create",
  [
    body("email", "Email Invalide Please Try Again").isEmail(),
    body("password").isLength({ min: 7 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const solt = await bcrypt.genSalt(10); // solt generate kiya
    const hashedPassword = await bcrypt.hash(req.body.password, solt); // hashed password generate kiya
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        location: req.body.location,
      });
      res.status(200).json({ mes: "created" });
    } catch (err) {
      res.status(500).json({ mes: err.message });
    }
  }
);

// login user
router.post(
  "/loginuser",
  [
    body("email", "Email Invalide Please Try Again").isEmail(),
    body("password", "pass incomlete").isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    console.log(email);
    let password = req.body.password;
    console.log(password);
    try {
      let userData = await User.findOne({ email });
      console.log("UserDataPaa:", userData.password);
      if (!userData) {
        return res.status(404).json({
          error:
            "try login with correct creadentials, from userData if block Paras",
        });
      }
      const pwdCompare = await bcrypt.compare(password, userData.password);
      console.log("pwdCompare:", pwdCompare);
      if (!pwdCompare) {
        return res.status(404).json({
          error:
            "try login with correct creadentials, from pwdCompare if block paras",
        });
      }
      // JWT send, signature
      const datapayload = {
        user: {
          id: userData._id,
        },
      };
      console.log(datapayload);
      authToken = jwt.sign(datapayload, jwtSecret);
      return res.json({ success: true, authToken });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);
module.exports = router;
