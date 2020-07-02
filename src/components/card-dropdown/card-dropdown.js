import React from "react";
import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
import CardItem from "../card-item/card.item";

const CardDropdown = (props) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {props.cardItems.map()}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cardItems: state.card.cardItems
})

export default connect(mapStateToProps)(CardDropdown);