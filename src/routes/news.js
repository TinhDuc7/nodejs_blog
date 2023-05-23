const express = require('express');
const router = express.Router();

const newsControler = require('../app/controllers/NewsController');

// newsController.index
router.get('/:slug', newsControler.show);
router.get('/', newsControler.index);

module.exports = router;
