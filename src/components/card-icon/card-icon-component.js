import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import {cardAction} from "../../redux/card/card-action";
import {selectCardItemsCount} from "../../redux/card/card.selector";

const CardIcon = ({toggleHidden,itemCount}) =>{
    return(
        <div className="cart-icon" onClick={toggleHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden:() => dispatch(cardAction())
})

const mapStateToProps = (state) => ({
    itemCount:selectCardItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CardIcon)
