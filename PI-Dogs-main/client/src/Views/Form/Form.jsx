import { useEffect, useState } from "react";
import style from "./Form.module.css";
import {validate, validateSubmit} from "./validation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createDog } from "../../redux/actions";


const Form = () => {
    
    const dispatch = useDispatch()
    const [temperaments, setTemperaments] = useState([]);


useEffect(() => {
    axios.get("http://localhost:3001/temperaments").then((response) => {
        setTemperaments(response.data.temperaments)
    });
}, []);


let dogsTemp = temperaments;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenList = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleCloseList = () => {
    setIsOpen(false);
  };


const [form,setForm] = useState({
    image:"",
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    });

    const [errors,setErrors] = useState({
        image: "",
        name: "",
        height: "",
        weight: "",
        life_span: "",
        temperaments: [],
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        if (property != "temperaments"){
        setForm({...form, [property] : value})
        validate({...form, [property] : value}, property, errors, setErrors)
        }else{

            if (event.target.selectedOptions.length === 1){
                const selectedOptions = Array.from(event.target.selectedOptions);
                
                const selectedValues = selectedOptions.map((option) => option.value);
                
                if (form.temperaments.includes(selectedValues.join(","))) {
                    const newSelectedTemperaments = form.temperaments.filter((temp) => temp !== selectedValues.join(","));
                    setForm({...form, [property] : newSelectedTemperaments});
                    validate({...form, [property] : newSelectedTemperaments}, property, errors, setErrors);
                }else{

                    setForm({...form, [property] : [...form.temperaments, selectedValues.join(",")]});
                    validate({...form, [property] : [...form.temperaments, selectedValues.join(",")]}, property, errors, setErrors);
                }
            }
        }
        };
    

    const handleSubmit = (event) => {
        event.preventDefault();
       if (!validateSubmit(errors, form)) {
        console.log(temperaments);
        alert("Debe completar todos los campos sin errores y selecionando al menos un temperamento")
    }else{
      console.log(form);
       dispatch(createDog(form));
    }
    }
    return (
<div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
        <h1>CREATE A BREED OF DOG</h1>
        <div className={style.container_input}>
            <label>Image (link) : </label>
            <input className={style.input} type="text" value={form.image} name="image" onChange={changeHandler} placeholder="ej: https://www.imagen.com/"/>
            <br/>
            {errors.image && <span className={style.error}>{errors.image}</span>}
        </div>

        <div className={style.container_input}>
            <label>Name: </label>
            <input className={style.input} type="text" value={form.name} name="name" onChange={changeHandler} placeholder="ej: Border Collie"/>
            <br/>
            {errors.name && <span className={style.error}>{errors.name}</span>}
        </div>
       
        <div className={style.container_input}>
            <label>Height (cm) : </label>
            <input className={style.input} type="text" value={form.height} name="height" onChange={changeHandler} placeholder="ej: 30 - 50" />
            <br/>
            {errors.height && <span className={style.error}>{errors.height}</span>}
        </div>

        <div className={style.container_input}>
            <label>Weight (kg) : </label>
            <input className={style.input} type="text" color="red" value={form.weight} name="weight" onChange={changeHandler} placeholder="ej: 10 - 20"/>
            <br/>
            {errors.weight && <span className={style.error}>{errors.weight}</span>}
        </div>

        <div className={style.container_input}>
            <label>Life Span (years): </label>
            <input className={style.input} type="text" value={form.life_span} name="life_span" onChange={changeHandler} placeholder="ej: 12 - 15"/>
            <br/>
            {errors.life_span && <span className={style.error}>{errors.life_span}</span>}
        </div>

        <div className={style.container_input}>
            <label>Temperaments: </label>
            <div>
        <button className={style.btn_select} onClick={handleOpenList}>
          Select temperaments ({form.temperaments.length})
        </button>
        {isOpen && (
          <select
            id="temperaments"
            name="temperaments"
            multiple
            value={form.temperaments}
            onChange={changeHandler}
            onBlur={handleCloseList}

          >
            {dogsTemp.map((temperament) => (
              <option key={temperament.id} value={temperament.id}>
                {temperament.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <br/>
            {errors.temperaments && <span className={style.error}>{errors.temperaments}</span>}
        </div>

        <div>
           <button className={style.btn_create} type="submit">CREATE</button>
        </div>

       </form>

       </div>
    )
};

export default Form;