const Category = require('../models/category');

exports.getCategories = async(req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'An error occurred while fetching categories.' });
    }
};

exports.createCategories = async(req, res) => {
    const categories = req.body.categories;

    if (!Array.isArray(categories) || categories.length === 0) {
        return res.status(400).json({ error: 'An array of categories is required' });
    }

    try {
        const createdCategories = await Category.bulkCreate(categories);
        res.status(201).json(createdCategories);
    } catch (error) {
        console.error('Error creating categories:', error);
        res.status(500).json({ error: 'An error occurred while creating the categories.' });
    }
};