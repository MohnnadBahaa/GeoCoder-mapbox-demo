const express = require('express');
const router = express.Router();
const { address } = require('../../controllers/index');
router
	.route('/')
	.get(address.getAddresses)
	.post((req, res) => {
		res.send('hello');
	});

module.exports = router;
