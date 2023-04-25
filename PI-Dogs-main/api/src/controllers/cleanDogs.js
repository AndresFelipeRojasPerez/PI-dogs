require('dotenv').config();

const {URL_IMAGE} = process.env;

const cleanDogsApi = (arrayDogs) => 
    arrayDogs.map((dog) => {
        return {
            id : dog.id,
            image : dog.image.url,
            name : dog.name,
            created: false,
            temperaments : dog.temperament?.split(",")
            .map(temp => temp.trim()),
            weight : dog.weight.metric,
        };
    });

    const cleanDogsBDD = (arrayDogs) => 
    arrayDogs.map((dog) => {
        return {
            id : dog.id,
            image : dog.image,
            name : dog.name,
            created: dog.created,
            temperaments : dog.temperaments.map((temp) => {
                return `${temp.name}`
            }),
            weight : dog.weight,
        };
    });

    const cleanDogsApiById = async (arrayDogs) => 
    await arrayDogs.map((dog) => {
        return {
            id : dog.id,
            image : `${URL_IMAGE}/${dog.reference_image_id}.jpg`,
            name : dog.name,
            created: false,
            height : dog.height.metric,
            weight : dog.weight.metric,
            temperaments : dog.temperament?.split(",")
            .map(temp => temp.trim()),
            life_span : dog.life_span,
            
        };
    });

    const cleanDogsBDDById = async (arrayDogs) => 
    await arrayDogs.map((dog) => {
        return {
            id : dog.id,
            image : dog.image,
            name : dog.name,
            created: dog.created,
            height : dog.height,
            weight : dog.weight,
            temperaments : dog.temperaments.map((temp) => {
                return `${temp.name},`
            }),
            life_span : dog.life_span,
        };
    });

    module.exports = {
        cleanDogsApi,
        cleanDogsBDD,
        cleanDogsApiById,
        cleanDogsBDDById,
    }