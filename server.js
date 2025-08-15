const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// MongoDB Verbindung und Fehlerbehandlung
mongoose.connect('mongodb://localhost:27017/urlaub-planer-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

// Endpoint für die Startseite
app.get('/', (req, res) => {
  res.send('Backend läuft!');
});

// Server starten und Port-Überwachung
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
