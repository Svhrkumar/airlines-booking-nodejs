const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const bookingDetails = express.Router();
const bookingData = require('../jsonData/bookings.json');
const bookingsData = require('../schemas/bookingSchema');

bookingDetails.post(
	'/bookingseed',
	expressAsyncHandler(async (req, res) => {
		const created = await bookingsData.insertMany(bookingData.Bookings);
		res.send(created);
	})
);

bookingDetails.post(
	'/booking/userflight',
	expressAsyncHandler(async (req, res) => {
		const {
			bookingId,
			bookingUserEmail,
			bookingUserName,
			originCity,
			destinationCity,
			flightNo,
			flightId,
			bookingDate,
			DepartureTime,
			ArrivalTime,
			passengerDetails,
			ImageUrl,
			ticketPrice,
		} = req.body;
		const created = await bookingsData.create({
			bookingId,
			bookingUserEmail,
			bookingUserName,
			originCity,
			destinationCity,
			flightNo,
			flightId,
			bookingDate,
			DepartureTime,
			ArrivalTime,
			passengerDetails,
			ImageUrl,
			ticketPrice,
		});
		res.send(created);
	})
);

bookingDetails.post(
	'/userbooking',
	expressAsyncHandler(async (req, res) => {
		const data = req.body;

		const {
			bookingId,
			bookingUserEmail,
			bookingUserName,
			originCity,
			destinationCity,
			flightNo,
			flightId,
			bookingDate,
			DepartureTime,
			ArrivalTime,
			passengerDetails,
			ImageUrl,
			ticketPrice,
		} = req.body;
		const created = await bookingsData.create({
			bookingId,
			bookingUserEmail,
			bookingUserName,
			originCity,
			destinationCity,
			flightNo,
			flightId,
			bookingDate,
			DepartureTime,
			ArrivalTime,
			passengerDetails,
			ImageUrl,
			ticketPrice,
		});
		res.setHeader('Content-Type', 'application/json');
		res.send(created);
	})
);

bookingDetails.post(
	'/bookinghistory/flight',
	expressAsyncHandler(async (req, res) => {
		console.log(req.body);
		const { bookingId, bookingUserEmail } = req.body;
		if (bookingId != '') {
			const fetchedData = await bookingsData.find({
				bookingId,
			});
			res.send(fetchedData);
		} else if (bookingUserEmail != '') {
			const fetchedData = await bookingsData.find({
				bookingUserEmail,
			});
			res.send(fetchedData);
		}
	})
);
bookingDetails.delete(
	'/booking/cancel/:id',
	expressAsyncHandler(async (req, res) => {
		const findBooking = await bookingsData.findById(req.params.id);
		// console.log('findBooking', findBooking);
		if (findBooking) {
			const canceledBooking = await findBooking.remove();
			res.send({ message: 'flight ticket canceled', booking: canceledBooking });
		} else {
			res.status(404).send({ message: 'ticket not found' });
		}
	})
);

module.exports = bookingDetails;
