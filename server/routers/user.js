const router = require('express').Router();
const User = require('../models/user');

router.route('/').post((req, res) => {
	res.status(200).send(`hello api`);
});

module.exports = router;
