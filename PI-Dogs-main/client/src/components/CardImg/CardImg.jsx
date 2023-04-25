import style from "./CardImg.module.css";
import React from "react";

const CardImg = ({image,name}) => {

    return (
        <div className={style.card_img}>
            <img className={style.img} src={image} alt={name}/>
            <p>{name}</p>
        </div>
    )

}

export default CardImg;