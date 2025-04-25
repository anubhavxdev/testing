// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Models
const User = require('./models/user');
const Login = require('./models/login');

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://tirtharajbarma3:dominos7@cluster0.nsadppu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes

// Register Route
app.post('/api/join', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user', details: error });
  }
});

// Signin Route
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      // Save login activity
      const login = new Login({
        email: user.email,
        ipAddress: req.ip
      });
      await login.save();

      res.status(200).json({ message: 'Sign in successful', user });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error signing in', details: error });
  }
});

// Get All Users Route
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users', details: error });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
