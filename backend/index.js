// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const uri = 'mongodb+srv://biratpradhan98:evePc3sP00pnN5wI@cluster0.2szozx7.mongodb.net/clothing?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch(err => console.error("Could not connect to MongoDB...", err));

const itemsRouter = require('./routes/items.router');
app.use('/items', itemsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
