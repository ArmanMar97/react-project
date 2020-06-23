import React from "react";
import "./collection-preview.style.scss";
import "bootstrap/dist/css/bootstrap.min.css"
function CollectionPreview({items,title}) {
    return(
        <div className="preview-collection">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.map(item=>(
                    <div key={items.id}>{items.name}</div>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;