import React from "react";
function CollectionItem({id,name,price,imageUrl}) {
    return(
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage:`url${imageUrl}`
            }}>
            </div>
            <div className="collection-footer">
            </div>
        </div>
    )
}
export default CollectionItem;