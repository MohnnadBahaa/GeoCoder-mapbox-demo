const express = require('express');
const router = express.Router();
const { address } = require('../../controllers/index');
router
	.route('/')
	.get(address.getAddresses)
	.post(address.addAddress);

module.exports = router;
