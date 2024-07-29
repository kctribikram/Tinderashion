// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://ziadarshad51:ziad@cluster0.gpjbwp9.mongodb.net/tinderashion';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use(productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
