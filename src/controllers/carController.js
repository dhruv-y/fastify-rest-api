// External boom dependency (error objects)
const boom = require('boom')

// Acquire Data Model
const Car = require('../models/Car')

// Get all cars
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find()
        return cars
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get car by ID
exports.getSingleCar = async (req, res) => {
    try {
        const id = req.params.id
        const car = await Car.findById(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new car to model
exports.addCar = async (req, res) => {
    try {
        const car = new Car(req.body)
        return car.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an exisiting car
exports.updateCar = async (req, res) => {
    try {
        const id = req.params.id
        const car = req.body
        const { ...updateData } = car
        const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete Car
exports.deleteCar = async (req, res) => {
    try {
        const id = req.params.id
        const car = await Car.findByIdAndRemove(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}