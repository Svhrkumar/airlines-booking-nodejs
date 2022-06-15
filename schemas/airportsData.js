const mongoDB = require('mongoose');

const airportsCity = mongoDB.Schema({
	IATA_code: { type: String, default: null },
	ICAO_code: { type: String, default: null },
	airportName: { type: String, default: null },
	cityName: { type: String, default: null },
});

module.exports = mongoDB.model('airportsData', airportsCity);
