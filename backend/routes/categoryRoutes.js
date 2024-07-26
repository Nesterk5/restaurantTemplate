const express = require('express');
const { getCategories, createCategories } = require('../controllers/categoryController');
const router = express.Router();

router.get('/getCategories', getCategories);
router.post('/createCategories', createCategories)

module.exports = router;