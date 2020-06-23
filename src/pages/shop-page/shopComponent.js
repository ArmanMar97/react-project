import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-component/collection-preview";

class ShopComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collections:SHOP_DATA
        }
    }
    render() {
        let {collections} = this.state;
        return(
            <div className="shop-page">
                {collections.map(({id,title,items})=>(
                    <CollectionPreview key={id}  title={title} items={items} />
                ))}
            </div>
        )
    }
}
export default ShopComponent;