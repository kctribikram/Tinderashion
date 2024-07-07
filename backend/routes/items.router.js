// backend/routes/items.js

const express = require('express');
const multer = require('multer');
const router = express.Router();
const Item = require('../models/items.models');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/add', upload.single('image'), (req, res) => {
  const { id, name, price, size, color } = req.body;
  const image = req.file ? '/uploads/' + req.file.filename : '';

  const newItem = new Item({
    id,
    name,
    price,
    size: size.split(',').map(s => s.trim()),
    color: color.split(',').map(c => c.trim()),
    image
  });

  newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.put('/update/:id', upload.single('image'), (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.name = req.body.name;
      item.price = req.body.price;
      item.size = req.body.size.split(',').map(s => s.trim());
      item.color = req.body.color.split(',').map(c => c.trim());
      item.image = req.file ? '/uploads/' + req.file.filename : item.image;

      item.save()
        .then(() => res.json('Item updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
