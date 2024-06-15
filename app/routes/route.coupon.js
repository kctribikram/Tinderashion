const router = require('express').Router();
const couponController = require('../controllers/couponController');

router.route('/')
    .get(couponController.index)
    .post(couponController.store);

router.route('/:id')
    .delete(couponController.destroy)
    .put(couponController.update);

module.exports = router;