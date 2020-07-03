import React from "react";
import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
// import CardItem from "../card-item/card.item";
import "./cart-item-style-2.scss";

const CardDropdown = ({cardItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {cardItems.map(function (item){
                    return(
                        <div className="cart-item" key={item.id}>
                            <img src={item.imageUrl} alt="item"/>
                            <div className="item-details">
                                <span className="name">{item.name}</span>
                                <span className="name">${item.quantity}x{item.price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

function mapStateToProps(state){
    return{
        cardItems: state.card.cardItems
    }
}

export default connect(mapStateToProps)(CardDropdown);