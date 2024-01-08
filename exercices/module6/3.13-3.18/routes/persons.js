const express = require('express');
const router = express.Router();
const Person = require('../models/person')

// Get all
router.get('/', (request, response) => {
    Person.find({}).then(persons => {
        console.log(persons)
        response.json(persons)
    })
    
})

// Get by id
router.get('/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        if (person) {
            response.json(person)
        } else {
            response.status(400).json({ error: 'id not found' })
        }
    })
})

// Save one
router.post('/', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ error: 'name and number missing' })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

// Delete one
router.delete('/:id', (request, response) => {
    if (!request.params.id)
        return response.status(400).json({ error: 'id not correct' })
    Person.findByIdAndRemove(request.params.id).then(result => {
        if (result) {
            response.json(result)
        } else {
            response.status(400).json({ error: 'id not found' })
        }
    })

})

// Update one
router.put('/:id', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ error: 'name and number missing' })
    }
    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person).then(updatedPerson => {
        if (updatedPerson) {
            response.json(updatedPerson)
        } else {
            response.status(400).json({ error: 'error updating' })
        }
    })


})

module.exports = router;