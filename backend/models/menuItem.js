const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('../models/category');

const MenuItem = sequelize.define('MenuItem', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    }
}, {
    timestamps: false
});

// Define association
MenuItem.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = MenuItem;