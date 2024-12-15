const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(bodyParser.json());

const users = [
  {
    username: 'test',
    email: 'email@mail.com',
    password: '$2a$10$W1X/QoxVfOMjMnwrEddkxeCRv7mFjXJkpwHLaC0g9ZYlz8d3rdVqK', // hashat lösen: 'password123'
  }
];

const JWT_SECRET = process.env.JWT_SECRET || '2C3D646F9BA8AA47EDD48299554FF';

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(404).send('User not found');
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign(
      { username: user.username }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );
    
    res.json({ access_token: token });
  });
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).send('Token is required');
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }

    res.json({ message: 'This is a protected route', user: decoded.username });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
