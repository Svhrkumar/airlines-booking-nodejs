const mongoDB = require('mongoose');

const flightBookings = mongoDB.Schema({
	flightId: { type: String, default: null },
	flightCode: { type: String, default: null },
	bookedPassengers: [
		{
			name: { type: String, default: null },
			gender: { type: String, default: null },
			age: { type: String, default: null },
			mealType: { type: String, default: null },
			seatNo: { type: String, default: null },
		},
	],
});

module.exports = mongoDB.model('flightBookingsData', flightBookings);
