const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
	},
	passwordHash: {
		type: String,
		required: [true, 'Password hash is required'],
	},
});

module.exports = mongoose.model('User', userSchema);
