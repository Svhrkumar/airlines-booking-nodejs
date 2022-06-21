const mongoDB = require('mongoose');
const bookingsData = mongoDB.Schema({
	bookingId: { type: Number, default: null },
	bookingUserEmail: { type: String, default: null },
	bookingUserName: { type: String, default: null },
	originCity: { type: String, default: null },
	destinationCity: { type: String, default: null },
	flightNo: { type: String, default: null },
	flightId: { type: String, default: null },
	bookingDate: { type: String, default: null },
	DepartureTime: { type: String, default: null },
	ArrivalTime: { type: String, default: null },
	passengerDetails: [
		{
			name: { type: String, default: null },
			gender: { type: String, default: null },
			age: { type: String, default: null },
			mealType: { type: String, default: null },
			seatNo: { type: String, default: null },
		},
	],
	ImageUrl: { type: String, default: null },
	ticketPrice: { type: Number, default: null },
});

module.exports = mongoDB.model('bookingsData', bookingsData);
