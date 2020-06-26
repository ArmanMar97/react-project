import React from "react";
import SignIn from "../../components/sign-in/Sign-in";
function SignInSignUp({currentUser}) {
    return(
        <div className="sign-in-and-sign-up">
            <SignIn currentUser={{currentUser}}/>
        </div>
    )
}
export default SignInSignUp;