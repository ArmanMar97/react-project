import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item";
import {Link} from "react-router-dom";
function CollectionPreview({title,items}) {
    return(
        <div className="collection-preview">
            <Link className="title" to={`/shop/${title.toLowerCase()}`}>
                <h1 className="title">{title}</h1>
            </Link>
            <div className="preview">
                {items.filter((item,index)=>index<4).map(function (item) {
                    return <CollectionItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}

export default CollectionPreview;