import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();
    const [dog, setDog] = useState({});

     useEffect(async () => {
        await axios.get(`http://localhost:3001/dogs/${detailId}`)
         .then((response) => {
        setDog(response.data);
         })
         .catch((error) => {
            alert(error)
         })
    },[]);

    if (!Object.keys(dog).length) {
        return <h3>Loading...</h3>;
    }
    
    return (
       <div>
       <h1>Esta es la vista de Detail</h1>
       <p>Id: {dog[0].id}</p>
       <img src={dog[0].image} alt={dog.name} height='300px' width='450px'/>
       <h2>Name: {dog[0].name}</h2>
       <p>Height: {dog[0].height}</p>
       <p>Weight: {dog[0].weight}</p>
       <p>Temperamentos: {dog[0].temperaments.join(",")}</p>
       <p>Life Span: {dog[0].life_span}</p>
       
       </div>
    );
};

export default Detail;