// userController: handle user logic

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User(Date.now().toString(), username, hashedPassword, role);
  User.addUser(newUser);
  res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, username: newUser.username, role: newUser.role } });
};

// Login user
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = User.findByUsername(username);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

// Add a new user (admin only)
exports.addUser = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User(Date.now().toString(), username, hashedPassword, role);
  User.addUser(newUser);
  res.status(201).json({ message: 'User added successfully', user: { id: newUser.id, username: newUser.username, role: newUser.role } });
};

// Update user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  if (updatedData.password) {
    updatedData.password = await bcrypt.hash(updatedData.password, 10);
  }
  const updatedUser = User.updateUser(id, updatedData);
  if (!updatedUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ message: 'User updated successfully', user: updatedUser });
};

// Delete user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const success = User.deleteUser(id);
  if (!success) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ message: 'User deleted successfully' });
};
