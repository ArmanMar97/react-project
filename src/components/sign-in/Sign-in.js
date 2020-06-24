import React from "react";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";
import CustomButton from "../custom-button/custom-button";
class SignIn extends React.Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:"",
            password:""
        }
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({email:"",password:""})
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
                    <FormInput handleChange={this.handleChange} label="Email" name="email" value={this.state.email} required type="email"/>
                    <FormInput handleChange={this.handleChange} label="Password" name="password" value={this.state.password} required type="password"/>
                    {/*<input type="submit" value="Submit Form"/>*/}
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;