import React from "react";
import "./directory.scss";
import MenuItem from "../menu-items/menu-items";
import {connect} from "react-redux";

const Directory = () => (
    <div className="directory-menu">
        {sections.map(function ({title,id,imageUrl,size,linkUrl}) {
            return(
                <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} imageSize={size} linkUrl={linkUrl}/>
            )
        })}
    </div>
)

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Directory);
