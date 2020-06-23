import React from "react";
import "./homepage.styles.scss";
import ShopComponent from "../shop-page/shopComponent";
import Directory from "../../components/directory/directory";
function HomepageComponent() {
    return(
        <div className="homepage">
            <Directory/>
        </div>
    )
}
export default HomepageComponent;