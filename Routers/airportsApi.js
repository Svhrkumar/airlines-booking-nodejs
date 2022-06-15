const express = require('express');
const airportsData = express.Router();
const airportData = require('../jsonData/airports.json');
const airportDetails = require('../schemas/airportsData');
const expressAsyncHandler = require('express-async-handler');
airportsData.post(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		console.log(req.body);
		console.log(airportData);
		const created = await airportDetails.insertMany(airportData.airports);
		console.log(created);
		res.send(created);
	})
);
airportsData.get(
	'/airports',
	expressAsyncHandler(async (req, res) => {
		const fetchAirports = await airportDetails.find();
		res.send(fetchAirports);
	})
);

module.exports = airportsData;
