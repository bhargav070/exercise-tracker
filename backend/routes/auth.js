const router = require('express').Router();
const User = require('../models/user_model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Secret key for JWT
const JWT_SECRET = process.env.jwt_key; 

// Signup route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ username });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Create a new user
    user = new User({ username, password });
    await user.save();

    
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({token});
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find user
    const user = await User.findOne({ username });
    // console.log(username);
    if (!user) return res.status(400).json({ msg: 'Invalid username' });

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
