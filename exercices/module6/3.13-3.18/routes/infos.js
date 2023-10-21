const express = require('express');
const router = express.Router();
const Person = require('../models/person')

// Find all
router.get("/", (request, response) => {
    Person.countDocuments()
        .then(count => {
            response.type("text").send(`Phonebook has info for ${count} people.\n${new Date().toString()}`)
        })
        .catch(err => next(err))
})

module.exports = router;