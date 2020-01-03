const mongoose = require('mongoose');

const addressesSchema = new mongoose.Schema({
	addressID: {
		type: String,
		required: [true, 'address ID is required'],
		unique: true,
		trim: true,
		maxlength: [10, 'address ID must be less than 10 character']
	},
	// this address provided by the client and will convert to formated address
	providedAddress: {
		type: String,
		required: [true, 'please provide an address']
	},
	location: {
		type: {
			type: String,
			enum: ['Point']
		},
		coordinates: {
			type: [Number, 'coordinates is required '],
			index: '2DSphere'
		},
		formatedAddress: String
	},
	createdAT: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Address', addressesSchema);
