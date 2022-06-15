const mongoDB = require('mongoose');
const flightsData = mongoDB.Schema({
	flightCarrer: { type: String, default: null },
	OriginCity: { type: String, default: null },
	flightCode: { type: String, default: null },
	OrigAirportName: { type: String, default: null },
	DestinationCity: { type: String, default: null },
	DestAirportName: { type: String, default: null },
	DepartureDate: { type: String, default: null },
	DepartureTime: { type: String, default: null },
	ArrivalDate: { type: String, default: null },
	ArrivalTime: { type: String, default: null },
	ImageUrl: { type: String, default: null },
	Price: { type: String, default: null },
	block: { type: Boolean, default: null },
});
module.exports = mongoDB.model('flightsData', flightsData);
