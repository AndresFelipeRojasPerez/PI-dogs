const getAllTemperaments = require('../controllers/getAllTemperaments');

const getAllTemperamentsHandler = async (req, res) => {
    try {
        const temperaments = await getAllTemperaments();
        res.status(200).json({temperaments});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = getAllTemperamentsHandler;