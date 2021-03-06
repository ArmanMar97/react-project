import React from "react";
import "./menu-items.scss";
import {withRouter} from "react-router-dom";
function MenuItem({title,imageUrl,imageSize,history,linkUrl,match}) {
    return(
        <div className={`${imageSize} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}
export default withRouter(MenuItem);