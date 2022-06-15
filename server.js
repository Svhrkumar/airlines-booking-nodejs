const express = require('express');
const mongoDB = require('mongoose');
const airportsData = require('./Routers/airportsApi');
const bookingDetails = require('./Routers/bookingApi');
const flightDetails = require('./Routers/flightsApi');
require('dotenv').config();
mongoDB
	.connect(process.env.MONGODB_URL || 'mongodb://localhost/airlinebooking', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log('DB Connected Successfully'))
	.catch((err) => {
		console.log('DB Connection Failed', err);
		process.exit(1);
	});
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, (res) => {
	console.log(`server is connected ${PORT}`);
});
app.get('/', (req, res) => {
	res.send('Hiii Raghav your services are upandrunning');
});
app.use('/api/v1/', airportsData);
app.use('/api/v1/', flightDetails);
app.use('/api/v1/', bookingDetails);
