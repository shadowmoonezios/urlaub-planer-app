const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// MongoDB connection and error handling
mongoose.connect('mongodb://localhost:27017/urlaub-planer-app', { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

// Endpoint for the homepage
app.get('/', (req, res) => {
  res.send('Backend läuft!');
});

// Middleware for error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Etwas ist schiefgelaufen!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});