const getAllDogs = require('../controllers/getAllDogs');
const getDogById = require('../controllers/getDogById');
const createDog = require('../controllers/createDog');
const getDogByName = require('../controllers/getDogByName');


const getAllDogsHandler = async (req, res) => {
    const {name} = req.query;

    try {
      const results = name ? await getDogByName(name) : await getAllDogs();
        res.status(200).json(results);
    } catch (error) {
        res.status(404).json(error.message)
    }
};


const getDogByIdHandler = async (req, res)=> {
    try {
        const {id} = req.params;
        const dog = await getDogById(id);
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const createDogHandler = async (req, res)=> {
    try {
        const {image, name, height, weight, life_span, temperaments} = req.body;
        const newDog = await createDog({image, name, height, weight, life_span, temperaments});
        res.status(200).json("Raza creada exitosamente");
    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports = {getAllDogsHandler, getDogByIdHandler, createDogHandler}