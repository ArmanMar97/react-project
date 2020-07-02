import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import cardAction from "../../redux/card/card-action";

const CardIcon = ({toggleHidden}) =>{
    return(
        <div className="cart-icon" onClick={toggleHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden:() => dispatch(cardAction())
})

export default connect(null,mapDispatchToProps)(CardIcon)
