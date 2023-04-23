const {Dog, Temperament} = require("../db");
const {cleanDogsApi, cleanDogsBDD} = require("./cleanDogs")
const axios = require("axios");
const {Op} = require("sequelize");
require('dotenv').config();

const {URL_BASE} = process.env;

const getDogByName = async (nameQuery) => {

    let name1 = nameQuery.toLocaleLowerCase();
    let name2 = name1.split(" ").map((pl) => {
       return pl[0].toUpperCase() + pl.slice(1);
    }).join(" ")

    console.log(name2);


const name3 = {
    name: {[Op.iLike]: `%${nameQuery.toLowerCase()}%`}
}    

    let dogsBDDRaw = await Dog.findAll({
        where: name3,
        include: {
            model: Temperament,
            attributes: ["name"],
            through : {
                attributes:[]
            }
        }
    });


    let dogsApi = await axios (`${URL_BASE}/breeds`)
    .then((response) => {  
         return response.data;
        });

    let dogsApiFilterRaw = dogsApi.filter((dg) =>  dg.name.includes(name2))


    const dogsBDD = cleanDogsBDD(dogsBDDRaw);
    const dogsApiFilter = cleanDogsApi(dogsApiFilterRaw);
    

    const allDogs = [...dogsBDD, ...dogsApiFilter];
    
    if (!allDogs.length) throw new Error ("No se encontró coincidencia entre el texto ingresado y las razas existentes");

    return allDogs;

}

module.exports = getDogByName;