const mongoDB = require('mongoose');

const airportsCity = mongoDB.Schema({
	IATA_code: { type: String, default: null },
	ICAO_code: { type: String, default: null },
	airport_name: { type: String, default: null },
	city_name: { type: String, default: null },
});

module.exports = mongoDB.model('airportsData', airportsCity);
