const express = require('express');
const router = express.Router();

const newsControler = require('../app/controllers/NewsController');

// newsController.index
router.use('/:slug', newsControler.show);
router.use('/', newsControler.index);

module.exports = router;
