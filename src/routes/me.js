const express = require('express');
const router = express.Router();

const meControler = require('../app/controllers/MeController');

// meController.index
router.get('/stored/courses', meControler.storedCourses);
router.get('/trash/courses', meControler.trashCourses);

module.exports = router;
