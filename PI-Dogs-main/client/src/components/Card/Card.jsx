import style from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({id,temperaments,weight}) => {

    return (
        <div className={style.card}>
          <h2 className={style.title}>CHARACTERISTICS</h2>
            <p>Temperaments: {temperaments?.join(",")}</p>
            <p>Weight: {`(${weight})Kg`}</p>
        <Link to= {`/detail/${id}`}><h2 className={style.detail}>Detail</h2></Link>
        </div>
    ) 

}

export default Card;