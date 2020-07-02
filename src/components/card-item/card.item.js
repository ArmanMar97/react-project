import React from "react";
import "./cart-item.styles.scss";
const CardItem = () =>({item:{imageURL,price,name,quantity}})=>(
    <div className="cart-item">
        <img src={imageURL} alt="item"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="name">${quantity}*{price}</span>
        </div>
    </div>
)
export default CardItem;