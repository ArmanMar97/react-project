import React from "react";
import {auth} from "../../firebase/firebase.utils";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/original.svg";
import {connect} from "react-redux"
import "./header.styles.scss";
import CardIcon from "../card-icon/card-icon-component";
import CardDropdown from "../card-dropdown/card-dropdown";
import toggleCardHidden from "../../redux/card/card-actions";
import store from "../../redux/store";

function Header({currentUser,hidden}) {
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser?(
                        <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    ):<Link className="option" to="/signin">SIGN IN</Link>
                }
                <CardIcon/>
            </div>
            {
                hidden?null:<CardDropdown/>
            }
        </div>
    )
}

const mapStateToProps = (state)=>({
    currentUser:state.user.currentUser,
    hidden:state.card.hidden
})

export default connect(mapStateToProps)(Header);