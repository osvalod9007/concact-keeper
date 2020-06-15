const express = require('express');
const connectDB = require('./config/db');

// Connect Datebase
connectDB();

const app = express();

app.get('/', (reqm, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

// Difine Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
