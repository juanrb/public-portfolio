const express = require('express');
const router = express.Router();

router.use('/photos', require('./api/photos/routes'));

router.get('/status', (req, res) => res.sendStatus(200));

module.exports = router;
