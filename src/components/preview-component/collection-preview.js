import React from "react";
import "./collection-preview.style.scss";
function CollectionPreview({title,items})
{
    console.log(items)
    return(
        <div className="preview-collection">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item,index)=>index<4).map(function (item) {
                    return <div key={item.id}>{item.name}</div>
                })}
            </div>
        </div>
    )
}

export default CollectionPreview;