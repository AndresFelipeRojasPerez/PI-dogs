import { Link } from "react-router-dom";
import style from "./CardImg.module.css";
import React from "react";

const CardImg = ({id,image,name}) => {

    return (
        <div className={style.card_img}>
            <Link to= {`/detail/${id}`}>
            <img className={style.img} src={image} alt={name}/>
            </Link>
            <p>{name}</p>
        </div>
    )

}

export default CardImg;