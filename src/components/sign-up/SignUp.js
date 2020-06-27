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
    handleSubmit = async (event)=>{
        event.preventDefault()
        const {displayName,email,password,confirmPassword} = this.state;
        if (password!==confirmPassword){
            alert("Passwords dont match!")
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
        }catch (e){
            console.log(e.message)
        }
    }

    handleChange(event){
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        name="displayName"
                        type="text"
                        onChange={this.handleChange}
                        value={displayName}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        onChange={this.handleChange}
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                    />
                </form>
                <CustomButton onClick={this.handleSubmit} type="submit">SIGN UP</CustomButton>
            </div>
        )
    }
}
export default SignUp;
