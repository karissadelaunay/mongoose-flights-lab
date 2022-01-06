const Flight = require('../models/flight'); 
const Ticket = require('../models/ticket');


module.exports = {
	index,
	new: newFlight,
	create, 
	show
}

function index(req, res){

	
	Flight.find({}, function(err, flightDocuments){


		
		res.render('flights/index', {
			title: 'Flights',
			flights: flightDocuments
			

		})
	})	

}


function show(req, res) {
    console.log(req.params.id)
	Flight.findById(req.params.id, function(err, flightDocument){
        Ticket.find({_id: {$nin: flightDocument.ticket}}, function(err, ticketDocuments){

            res.render('flights/show', {
                title: 'Flight Detail',
                flight: flightDocument, 
                tickets: ticketDocuments 
            })
        })
    })
}
      
  

function newFlight(req, res){
    const newFlight = new Flight();
    const dt = newFlight.departs;
// Format the date for the value attribute of the input
const departsDate = dt.toISOString().slice(0, 16);
console.log(departsDate)
res.render('flights/new', {departsDate});
}

function create(req, res){
   

	 req.body.flightNo = parseInt(req.body.flightNo)

	Flight.create(req.body, function(err, flightDocument){

		// after the db responds
		//then we respond to the client (aka the browser)
		res.redirect('/flights/'); // < tells the client make a get request to '/movies'
	})


}