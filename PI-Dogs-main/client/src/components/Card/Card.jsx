import style from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({id,image,name,temperaments,weight}) => {

    return (
        <div className={style.card}>
            <img src={image} alt={name} height='300px' width='450px'/>
            <Link to= {`/detail/${id}`}>
            <p>Name: {name}</p>
            </Link>
            <p>Temperaments: {temperaments?.join(",")}</p>
            <p>Weight: {`(${weight})Kg`}</p>
        </div>
    )

}

export default Card;