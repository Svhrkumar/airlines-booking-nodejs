const express = require('express');
const airlineDetails = express.Router();
const airData = require('../jsonData/airline.json');
const airlinesData = require('../schemas/airlineSchema');
const expressAsyncHandler = require('express-async-handler');
airlineDetails.post(
	'/airseed',
	expressAsyncHandler(async (req, res) => {
		console.log(req.body);
		console.log(airData);
		const created = await airlinesData.insertMany(airData.airlines);
		console.log(created);
		res.send(created);
	})
);

airlineDetails.get(
	'/airlines',
	expressAsyncHandler(async (req, res) => {
		const fetchAirline = await airlinesData.find();
		res.send(fetchAirline);
	})
);

module.exports = airlineDetails;
