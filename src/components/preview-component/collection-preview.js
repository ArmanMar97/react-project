import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item";
function CollectionPreview({title,items})
{
    return(
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item,index)=>index<4).map(function (item) {
                    return <CollectionItem key={item.id} item={item}/>
                })}
            </div>
        </div>
    )
}


export default CollectionPreview;