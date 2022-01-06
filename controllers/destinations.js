const Flight = require('../models/flight');

module.exports = {
	create 
}

function create(req, res){
	console.log(req.params.id, " req.params.id")
	console.log(req.body, " req.body aka the contents of the form")

	
	Flight.findById(req.params.id, function(err, flightDocument){

        // Ticket.find({flight: flight._id}, function(err, tickets){

		flightDocument.destinations.push(req.body);
		
		console.log(flightDocument)
		flightDocument.save(function(err){

			res.redirect(`/flights/${flightDocument._id}`)
        })
	})
	
}