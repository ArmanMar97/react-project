import React from "react";
import "./checkout-item.styles.scss";
import {connect} from "react-redux";
import {clearItemFromCard,cardAddItem,removeItemFromCard} from "../../redux/card/card-action";

const CheckOutItem = ({cardItem,clearItem,addItem,removeItem}) => {
    const {quantity,price,imageUrl,name} = cardItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(cardItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div className="arrow" onClick={()=> addItem(cardItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clearItem(cardItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem:item=>dispatch(clearItemFromCard(item)),
    addItem:item=>dispatch(cardAddItem(item)),
    removeItem:item=>dispatch(removeItemFromCard(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem);