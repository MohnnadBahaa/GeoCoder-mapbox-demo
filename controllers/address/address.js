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
		res.status(400).json({
			success: false,
			error: 'server error'
		});
	}
};
