import React from "react";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";
import CustomButton from "../custom-button/custom-button";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:"",
            password:""
        }
    }
    handleSubmit = async (event) =>{
        event.preventDefault();
        const {email,password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:"",password:""})
        }catch (e){
            console.log(e)
        }
    }
    handleChange(event){
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    render() {
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label="Email" name="email"
                        value={this.state.email}
                        type="email"
                        required
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        label="Password"
                        name="password"
                        value={this.state.password}
                        type="password"
                        required
                    />
                    <div className="d-flex justify-content-between">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;