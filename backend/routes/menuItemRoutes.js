const express = require('express');
const { getMenuItemsByCategory, getMenuItemById, createMenuItem, createMenuItems } = require('../controllers/menuItemController');
const router = express.Router();

router.get('/category/:categoryId', getMenuItemsByCategory);
router.get('/:id', getMenuItemById);
router.post('/createMenuItem', createMenuItem);
router.post('/createMenuItems', createMenuItems);

module.exports = router;