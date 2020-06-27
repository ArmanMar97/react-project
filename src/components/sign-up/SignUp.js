import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleSubmit(e){
    }
    handleChange(e){
    }
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}>
                    </FormInput>
                </form>
            </div>
        )
    }
}
export default SignUp;