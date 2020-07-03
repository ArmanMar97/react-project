import React from "react";
import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
// import CardItem from "../card-item/card.item";
import "./cart-item-style-2.scss";
import CardItem from "../card-item/card.item";

const CardDropdown = ({cardItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {cardItems.map(function (item){
                    return(
                        <CardItem item={item} key={item.id}/>
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