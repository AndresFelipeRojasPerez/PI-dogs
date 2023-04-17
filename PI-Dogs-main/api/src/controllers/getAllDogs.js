const {Dog, Temperament} = require("../db");
const {cleanDogsApi, cleanDogsBDD} = require("./cleanDogs")
const axios = require("axios");
require('dotenv').config();

const {URL_BASE} = process.env;


const getAllDogs = async () => {
    
    let dogsBDDRaw = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through : {
                attributes:[]
            }
        }
    });


    let dogsApiRaw = await axios (`${URL_BASE}/breeds`)
    .then((response) => {return response.data}); 

    let dogsBDD = cleanDogsBDD(dogsBDDRaw);
    let dogsApi = cleanDogsApi(dogsApiRaw);

    
    return [...dogsBDD, ...dogsApi] 
};

module.exports = getAllDogs;