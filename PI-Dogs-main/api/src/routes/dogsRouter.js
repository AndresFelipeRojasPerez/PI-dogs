const {Router} = require("express");
const {getAllDogsHandler, getDogByIdHandler, createDogHandler} = require("../handlers/dogsHandlers");
const validateCreateDog = require("../middlewares/validateCreateDog");


const dogsRouter = Router();


dogsRouter.get("/", getAllDogsHandler);

dogsRouter.get("/:id", getDogByIdHandler);

dogsRouter.post("/", validateCreateDog, createDogHandler);

module.exports = dogsRouter;