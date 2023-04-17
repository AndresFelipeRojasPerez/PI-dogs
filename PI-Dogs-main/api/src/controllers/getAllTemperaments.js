const {Temperament} = require ("../db");
require('dotenv').config();


const getAllTemperaments = async() => {
    
        let temperamentsBDD = await Temperament.findAll({
        });

    return temperamentsBDD
}

module.exports = getAllTemperaments;