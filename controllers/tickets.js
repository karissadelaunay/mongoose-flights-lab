const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addToFlight
};

async function addToFlight(req, res){

    try { 
        const flightDocument = await Flight.findById(req.params.flightId)
        const ticketDocument = await Ticket.flight.push(flightDocument._id)
        .save();
        res.redirect(`/flights/${flightDocument._id}`)

    } catch(err) {

    }
}

async function create(req, res) {
    try {
        const ticket = await Ticket.create(req.body)
        res.redirect(`/flights/${req.body.flight}`);

    } catch(err){

}

 }

async function newTicket(req, res) {
    try {
        const ticketDocuments = await Ticket.find({})
        const flightId = req.params.flightId
        res.render('tickets/new',{
            title: 'Add Ticket',
            tickets: ticketDocuments,
            flightId
        })

    } catch(err) {

    }

}

