const superagent = require('superagent');

exports.getGeocode = async (address) => {
	let response = await superagent
		.get(process.env.MAPQUEST_API_ENDPOINT)
		.query({ key: process.env.GEOCODER_API_KEY, location: address });
	response = JSON.parse(response.text);

	return response.results[0].locations[0];
};
console.log(getGeocode(Amman));
