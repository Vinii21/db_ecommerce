const Cars = require("../models/cars.model")

const createCar = async (newCar) => {
    const car = await Cars.create(newCar)
    return car;
}

module.exports = {
    createCar
}

