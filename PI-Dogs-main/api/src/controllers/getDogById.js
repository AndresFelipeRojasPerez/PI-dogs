const {Dog, Temperament} = require("../db");
const {cleanDogsApiById, cleanDogsBDDById} = require("./cleanDogs")
const axios = require("axios");
require('dotenv').config();

const {URL_BASE} = process.env;

const getDogById = async (id) => {

    if ((id.length < 10)) {

const dogApiRaw = await axios (`${URL_BASE}/breeds/${id}`)
.then((response) => {return response.data});


if (Object.keys(dogApiRaw).length > 0) {
const dogApi = cleanDogsApiById([dogApiRaw]);

return dogApi;
}
throw new Error ("No existe una raza con el Id solicitado")



}else{

const dogBDDRaw = await Dog.findByPk(id, {
    include: {
        model: Temperament,
        attributes: ["name"],
        through : {
            attributes: [],
        },
    },
});


if(Object.keys(dogBDDRaw).length > 0){ 
    const dogBDD = cleanDogsBDDById([dogBDDRaw]);
    
    return dogBDD
};

throw new Error ("No existe una raza con el Id solicitado");

}
}

module.exports = getDogById;

// ID.
// Imagen.
// Nombre.
// Altura.
// Peso.
// Temperamentos.
// Años de vida.