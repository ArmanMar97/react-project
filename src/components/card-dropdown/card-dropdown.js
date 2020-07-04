import React from "react";
import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
import CardItem from "../card-item/card.item";
import {selectCardItems} from "../../redux/card/card.selector";

const CardDropdown = ({cardItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cardItems.length?
                    cardItems.map(function (item){
                    return(
                        <CardItem item={item} key={item.id}/>
                    )
                }):<span className="empty message">Your card is empty</span>
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


function mapStateToProps(state){
    return{
        cardItems: selectCardItems(state)
    }
}

export default connect(mapStateToProps)(CardDropdown);