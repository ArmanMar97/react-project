import React from "react";
import {connect} from "react-redux";
import {selectShopItems} from "../../redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../preview-component/collection-preview";
import "./collections-overview.styles.scss";

const CollectionOverview = ({shop}) => {
    console.log(shop)
    return(
        <div className="collections-overview">
            {shop?Object.values(shop).map(item=>(
                <CollectionPreview key={item.id} items={item.items} title={item.title}/>
            )):null}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shop: selectShopItems
})


export default connect(mapStateToProps)(CollectionOverview);
