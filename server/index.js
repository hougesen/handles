const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV != 'production') require('dotenv').config();
console.log(process.env.NODE_ENV);
console.log(process.env.MONGODB_SRC);

// DB Connection
mongoose.connect(process.env.MONGODB_SRC, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Endpoints
const account = require('./routes/account');
app.use('/api/account', account);

const link_tree = require('./routes/link_tree');
app.use('/api/tree', link_tree);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// Server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
