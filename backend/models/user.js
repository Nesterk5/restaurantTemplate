// models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
}, {
    timestamps: false // Disable automatic createdAt and updatedAt fields
});

module.exports = User;