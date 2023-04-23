const validate = (form, property, errors, setErrors) => {


switch (property) {
    case "image":
        if(!form.image) setErrors({...errors, image:"Campo Image vacío"});

        break;

    case "name":
        
        if(!form.name) setErrors({...errors, name:"Campo Name vacío"});

        else if(!/^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/.test(form.name)){
            setErrors({...errors, name:"Hay un error en Name, debe ingresar el nombre de la raza como se muestra en el ejemplo sin espacios al inicio ni al final"});
        }else{
            setErrors({...errors, name:""});
        };

        break;

    case "height":

        const heightToValidate = form.height.split("-")

        if(!form.height) setErrors({...errors, height:"Campo Height vacío"});

        else if(!/^([1-9]|[1-9]\d|1[0-4]\d|150)\s-\s([1-9]|[1-9]\d|1[0-4]\d|150)$/.test(form.height)){
              setErrors({...errors, height:"Hay un error en Height, de ingresar un intervalo como se muestra en el ejemplo con valores entre 1 y 150"});
        }
        else if(+heightToValidate[1] < +heightToValidate[0]){
            setErrors({...errors, height:"Hay un error en Height, el segundo valor del intervalo debe ser mayor al primero"});

        }else{
             setErrors({...errors, height:""})
        };

        break;

    case "weight":

    const weightToValidate = form.weight.split("-")
            
    if(!form.weight) setErrors({...errors, weight:"Campo Weight vacío"});

    else if(!/^([1-9]|[1-9]\d|1\d{2}|2\d{1}|200)\s-\s([1-9]|[1-9]\d|1\d{2}|2\d{1}|200)$/.test(form.weight)){
          setErrors({...errors, weight:"Hay un error en Weight, de ingresar un intervalo como se muestra en el ejemplo con valores entre 1 y 200"});
    }
    else if(+weightToValidate[1] < +weightToValidate[0]){
        setErrors({...errors, weight:"Hay un error en Weight, el segundo valor del intervalo debe ser mayor al primero"});
    }else{
         setErrors({...errors, weight:""})
    };

        break;


    case "life_span":

    const lifeSpanToValidate = form.life_span.split("-")
            
    if(!form.life_span) setErrors({...errors, life_span:"Campo Life Span vacío"});

    else if(!/^(?:[1-9]|[1-2]\d|30) - (?:[1-9]|[1-2]\d|30)$/.test(form.life_span)){
          setErrors({...errors, life_span:"Hay un error en Life Span, debe ingresar un intervalo como se muestra en el ejemplo con valores entre 1 y 30"});
    }
    else if(+lifeSpanToValidate[1] < +lifeSpanToValidate[0]){
        setErrors({...errors, life_span:"Hay un error en Life Span, el segundo valor del intervalo debe ser mayor al primero"});
    }else{
         setErrors({...errors, life_span:""})
    };

        break;

    case "temperaments":

        if(!form.temperaments.length) {
            setErrors({...errors, temperaments:"Debe seleccionar por lo menos un temperamento"});
        }else {
            setErrors({...errors, temperaments:""})
        }
            break;

        default:
            break;
}
}

const validateSubmit = (errors, form) => {
    if(errors.image || errors.name || errors.height || errors.weight || errors.life_span || errors.temperaments.length > 0 ) {
        return false
    }else if (!form.image || !form.name || !form.height || !form.weight || !form.life_span || form.temperaments.length === 0 ){
    return false;
    }else{
        return true;
    }
}

export {validate, validateSubmit};