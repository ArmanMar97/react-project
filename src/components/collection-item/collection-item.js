import React from "react";
import CustomButton from "../custom-button/custom-button";
import {connect} from "react-redux";
import {cardAddItem} from "../../redux/card/card-action";
import "./collection-item.styles.scss";
function CollectionItem({id,name,price,imageUrl,cardAddItem}) {
    return(
        <div className="collection-item ">
            <div className="image" style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{`$${price}`}</span>
            </div>
            <CustomButton onClick={cardAddItem}>ADD TO CARD</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    cardAddItem:item => dispatch(cardAddItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);