const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
  });

const flightSchema = new Schema({
	airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
	airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
	flightNo: 
        {type: Number, min: 10, max: 9999},
    
    destinations: {
        type: [destinationSchema]
    },

	departs: {
        type: Date,
        default: function () {
            const newDate = new Date()
            return new Date(newDate.setFullYear(newDate.getFullYear()+ 1)) //(Date.now + 365*24*60*60000)
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);