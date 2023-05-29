const express = require('express');
const router = express.Router();

const courseControler = require('../app/controllers/CourseController');

// courseController.index
router.get('/create', courseControler.create);
router.post('/store', courseControler.store);
router.get('/:id/edit', courseControler.edit);
router.put('/:id', courseControler.update);
router.patch('/:id/restore', courseControler.restore);
router.delete('/:id', courseControler.destroy);
router.delete('/:id/force', courseControler.forceDestroy);
router.get('/:slug', courseControler.show);

module.exports = router;
