import React from "react";
import "./cart-item.styles.scss";


function CardItem({cardItems}) {
    return(
        <div className="cart-item">
            {/*<img src={cardItems.imageUrl} alt="item"/>*/}
            <div className="item-details">
                {/*<span className="name">{cardItems.name}</span>*/}
                {/*<span className="name">${cardItems.quantity}x{cardItems.price}</span>*/}
            </div>
        </div>
    )
}


export default CardItem;