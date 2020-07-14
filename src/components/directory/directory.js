import React from "react";
import "./directory.scss";
import MenuItem from "../menu-items/menu-items";
import {selectDirectorySection} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(function ({title,id,imageUrl,size,linkUrl}) {
            return(
                <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} imageSize={size} linkUrl={linkUrl}/>
            )
        })}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
