const { Address } = require('../../models/index');
exports.getAddresses = async (req, res, next) => {
	try {
		const addresses = await Address.find();
		return res.status(200).json({
			success: true,
			count: addresses.length,
			response: addresses
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			error: 'server error'
		});
	}
};

exports.addAddress = async (req, res, next) => {
	try {
		const address = await Address.create(req.body);

		return res.status(200).json({
			success: true,
			response: address
		});
	} catch (error) {
		console.log(error);
		if (error.code === 11000)
			return res
				.status(400)
				.json({ success: false, error: 'This address id is already exist' });
		res.status(500).json({ success: false, error: 'server error' });
	}
};
