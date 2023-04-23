const {Dog} = require("../db");
const temperaments = require("../models/temperaments");

const createDog = async ({
    image, 
    name, 
    height, 
    weight, 
    life_span, 
    temperaments
}) => {
    const newDog = await Dog.create({
        image, 
        name, 
        height, 
        weight, 
        life_span
    });
    newDog.addTemperaments(temperaments);

    console.log(newDog.temperaments);
    return newDog;
};


module.exports = createDog;