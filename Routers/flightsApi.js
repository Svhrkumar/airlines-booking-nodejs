const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const flightDetails = express.Router();
const flightData = require('../jsonData/flights.json');
const flightsData = require('../schemas/flightsSchema');
const flightBookingsData = require('../schemas/flightBookings');
flightDetails.post(
	'/flightseed',
	expressAsyncHandler(async (req, res) => {
		const created = await flightsData.insertMany(flightData.flights);
		res.send(created);
	})
);

flightDetails.post(
	'/flight',
	expressAsyncHandler(async (req, res) => {
		const { OriginCity, DestinationCity, DepartureDate, ReturnDate } = req.body;
		console.log(req.body);

		const fetchedDta = await flightsData.find({
			OriginCity,
			DestinationCity,
			DepartureDate,
		});
		console.log(fetchedDta);
		res.send(fetchedDta);
	})
);
flightDetails.get(
	'/flights',
	expressAsyncHandler(async (req, res) => {
		const fetchedDta = await flightsData.find();
		res.send(fetchedDta);
	})
);

flightDetails.post(
	'/flight/schedule',
	expressAsyncHandler(async (req, res) => {
		const {
			flightCarrer,
			OriginCity,
			flightCode,
			OrigAirportName,
			DestinationCity,
			DestAirportName,
			DepartureDate,
			DepartureTime,
			ArrivalDate,
			ArrivalTime,
			ImageUrl,
			Price,
			block,
		} = req.body;
		const fetchedDta = await flightsData.create({
			flightCarrer,
			OriginCity,
			flightCode,
			OrigAirportName,
			DestinationCity,
			DestAirportName,
			DepartureDate,
			DepartureTime,
			ArrivalDate,
			ArrivalTime,
			ImageUrl,
			Price,
			block,
		});
		res.send(fetchedDta);
	})
);
flightDetails.put(
	'/flight/schedule/update',
	expressAsyncHandler(async (req, res) => {
		const { _id } = req.body;
		let requestData = req.body;
		const findFlight = await flightsData.find({ _id });
		console.log('Find flight to update', findFlight);
		let flightData = findFlight.find((obj) => obj._id == _id);

		flightData = requestData;
		const flightUpdated = await flightsData.updateOne({ _id }, flightData);
		res.send(flightUpdated);
	})
);

flightDetails.post(
	'/flight/bookings/',
	expressAsyncHandler(async (req, res) => {
		const { flightId, flightCode } = req.body;

		const getFlight = await flightBookingsData.findOne({ flightCode });
		// console.log(getFlight);
		const { bookedPassengers } = getFlight;
		const bookedData = await flightBookingsData.insertMany({
			flightId,
			flightCode,
			bookedPassengers,
		});
		// console.log('stored', bookedData);

		res.send(bookedData);
	})
);
flightDetails.delete(
	'/flight/schedule/:id',
	expressAsyncHandler(async (req, res) => {
		const findFlight = await flightsData.findById(req.params.id);
		if (findFlight) {
			const deletedflight = await findFlight.remove();
			res.send({ message: 'flight canceled', flight: deletedflight });
		} else {
			res.status(404).send({ message: 'flight not found' });
		}
	})
);
module.exports = flightDetails;
