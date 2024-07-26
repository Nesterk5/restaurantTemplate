const MenuItem = require('../models/menuItem');

exports.getMenuItemsByCategory = async(req, res) => {
    const categoryId = req.params.categoryId;
    try {
        const menuItems = await MenuItem.findAll({ where: { category_id: categoryId } });
        res.json(menuItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getMenuItemById = async(req, res) => {
    const itemId = req.params.id;
    try {
        const menuItem = await MenuItem.findByPk(itemId);
        if (!menuItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }
        res.json(menuItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createMenuItem = async(req, res) => {
    const { name, price, image_url, category_id } = req.body;

    if (!name || !price || !image_url || !category_id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newMenuItem = await MenuItem.create({ name, price, image_url, category_id });
        res.status(201).json(newMenuItem);
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).json({ error: 'An error occurred while creating the menu item.' });
    }
};


exports.createMenuItems = async(req, res) => {
    const menuItems = req.body.menuItems;

    if (!Array.isArray(menuItems) || menuItems.length === 0) {
        return res.status(400).json({ error: 'An array of menu items is required' });
    }

    for (let item of menuItems) {
        if (!item.name || !item.price || !item.image_url || !item.category_id) {
            return res.status(400).json({ error: 'All fields are required for each menu item' });
        }
    }

    try {
        const createdMenuItems = await MenuItem.bulkCreate(menuItems);
        res.status(201).json(createdMenuItems);
    } catch (error) {
        console.error('Error creating menu items:', error);
        res.status(500).json({ error: 'An error occurred while creating the menu items.' });
    }
};