import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CheckOutItem from "../../components/checkout-item/checkout.item";
import {selectCardItems,selectCardTotal} from "../../redux/card/card.selector";
import "./checkout.styles.scss";

const CheckoutPage = ({cardItems,total}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cardItems.map(item=>(
                    <CheckOutItem cardItem={item} key={item.id}/>
                ))
            }
            <div className="total">
                <span>TOTAL:${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cardItems: selectCardItems,
    total:selectCardTotal
})

export default connect(mapStateToProps)(CheckoutPage);