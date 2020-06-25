import React from "react";
import "./custom-button.styles.scss";
function CustomButton({children,...otherProps}) {
    // console.log(otherProps)
    return(
        <button className="custom-button"{...otherProps} >
            {children}
            {console.log(otherProps)}
        </button>
    )
}
export default CustomButton;