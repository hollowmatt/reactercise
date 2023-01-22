const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/exercise');
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established");
});

app.listen(port, () => {
  console.log(`Express server runnign on port: ${port}`);
});