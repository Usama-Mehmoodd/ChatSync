const express = require("express");
const { generateToken } = require("../services/auth");
const { User } = require("../models/users");

const { userSchema } = require("../services/usersData");

async function handleSignUp(req, res) {
  const { username, email, password } = req.body;

  const validationResult = userSchema.safeParse({ username, email, password });
  if (!validationResult.success) {
    return res.status(400).json({ message: validationResult.error.errors[0].message });
  }

  const { username, email, password } = validationResult.data;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email and password are required" });
  }

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const newUser = await User.create({ username, email, password });

  const token = generateToken(newUser);

  res.status(200).json({
    success: true,
    message: "User created successfully",
    user: newUser,
    token: token,
  });
}

async function handleLogin(req, res) {
  const { email, password } = req.body;

  const validationResult = userSchema.safeParse({ email, password });
  if (!validationResult.success) {
    return res.status(400).json({ message: validationResult.error.errors[0].message });
  }

  const { email, password } = validationResult.data;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const existingUser = await User.findOne({ email: email });

  if (!existingUser) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  if (existingUser.password !== password) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = generateToken(existingUser);

  res.status(200).json({
    success: true,
    message: "Login successful",
    user: existingUser,
    token: token,
  });
}

module.exports = {
  handleSignUp,
  handleLogin,
};
