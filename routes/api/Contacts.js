const express = require('express');
const Router = express.Router();

const Contact = require('../../models/Contact');

Router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE');
    next();
});

// @route  GET api/contacts
// @desc   Get all contacts
// @access Public
Router.get('/', (req, res) => {
    Contact.find()
        .sort({date: 1})
        .then(contacts => res.json(contacts))
});

// @route  POST api/contacts
// @desc   Create new contact
// @access Public
Router.post('/', (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    newContact.save()
        .then(contact => res.json(contact));
});

// @route  DELETE api/contacts
// @desc   Delete a contact
// @access Public
Router.delete('/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then(contact => contact.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = Router;