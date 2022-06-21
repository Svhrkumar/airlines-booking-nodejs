const mongoDB = require('mongoose');

const airlines = mongoDB.Schema({
	label: { type: String, default: null },
	image: { type: String, default: null },
});

module.exports = mongoDB.model('airlinesData', airlines);
