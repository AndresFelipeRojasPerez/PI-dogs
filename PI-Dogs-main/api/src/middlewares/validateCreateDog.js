const validate = (req,res,next) => {
    const {image,name,height,weight,life_span,temperaments} = req.body;

    if ( !image || typeof(image) !== "string") return res.status(400).json({error : "El item image no puede estar vacío y debe ser de tipo string"});
    if ( !name || typeof(name) !== "string") return res.status(400).json({error : "El item name no puede estar vacío y debe ser de tipo string"});
    if ( !height || typeof(height) !== "string") return res.status(400).json({error : "El item height no puede estar vacío y debe ser de tipo string"});
    if ( !weight || typeof(weight) !== "string") return res.status(400).json({error : "El item weight no puede estar vacío y debe ser de tipo string"});
    if ( !life_span || typeof(life_span) !== "string") return res.status(400).json({error : "El item life_span no puede estar vacío y debe ser de tipo string"});
    if ( !temperaments || !temperaments.length || !Array.isArray (temperaments)) return res.status(400).json({error : "El item temperaments no puede estar vacío y debe ser un array numérico"});

    next();
}

module.exports = validate;