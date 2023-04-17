const {Temperament} = require ("./db");
const axios = require("axios");
require('dotenv').config();

const {URL_BASE} = process.env;

const getTemperamentsToBDD = async() => {

    
    let dogs = await axios (`${URL_BASE}/breeds`)
    .then((response) => {  
        return response.data;
    });

  
    let arrayTemperaments = dogs.map(dg =>
         dg.temperament)
         .filter((temp) => temp != null)
         .map((tem)=>tem.split(","))
         .flat();
  
let arrayTemperamentsT = arrayTemperaments.map((temp) => temp.trim());

let arrayTemperaments2 = [...new Set(arrayTemperamentsT)].sort().map((temp) => {
    
    return {name: temp.trim()};
});

const newTemperaments = await Temperament.bulkCreate(arrayTemperaments2);
    

};

module.exports = getTemperamentsToBDD;