const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middleware');
const { UserService } = require('../services');

exports.register = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    await user.save();
    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}