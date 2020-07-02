import React from "react";
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
import {cardAction, cardAddItem} from "../../redux/card/card-action";
import "./collection-item.styles.scss";
import store from "../../redux/store";


function CollectionItem({item,addItem}) {
    return(
        <div className="collection-item ">
            <div className="image" style={{
                backgroundImage:`url(${item.imageUrl})`
            }}/>
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{`$${item.price}`}</span>
            </div>
            <CustomButton onClick={()=>addItem(item)}>ADD TO CARD</CustomButton>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem:item=>dispatch(cardAddItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);