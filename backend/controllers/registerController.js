const bcrypt = require('bcryptjs');
const User = require('../models/user');

// console.log(User); // Log the User model to verify it's correctly imported

exports.register = async(req, res) => {
    console.log(req.body); // Log the request body
    const { name, email, password, phone } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone
        });
        res.status(201).json(user);
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ error: err.message });
    }
};