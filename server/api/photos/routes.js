const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.route('/').get(controller.getList);
router.route('/:id').get(controller.getOne);
// router.route('/').post(controller.create);
// router.route('/:id').put(controller.update);
// router.route('/:id').delete(controller.delete);

module.exports = router;
