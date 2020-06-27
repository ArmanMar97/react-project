import React from "react";
import SignIn from "../../components/sign-in/Sign-in";
import SignUp from "../../components/sign-up/SignUp";
function SignInSignUp({currentUser}) {
    return(
        <div className="sign-in-and-sign-up d-flex">
            <SignIn currentUser={{currentUser}}/>
            <SignUp/>
        </div>
    )
}
export default SignInSignUp;