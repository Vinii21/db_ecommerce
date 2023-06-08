const {createCar} = require("../repositories/cars.repository")

class CarsServices {
    static async createNewCar(newCar) {
        try {
            const car = await createCar(newCar)
            return car;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = CarsServices