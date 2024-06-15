const router = require('express').Router();
const bannerController = require('../controllers/bannerController');

router.route('/')
    .get(bannerController.index)
    .post(bannerController.store);

router.route('/:id')
    .delete(bannerController.destroy)
    .put(bannerController.update);

module.exports = router;