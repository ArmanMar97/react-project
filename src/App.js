import React from 'react';
import {Switch,Route} from "react-router-dom";
import "./App.css";
import HomepageComponent from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop-page/shopComponent";
import Header from "./components/header/Header";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up-page";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            currentUser:null
        }
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
            createUserProfileDocument(user)
            // this.setState({currentUser:user})
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return(
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomepageComponent}/>
                    <Route path="/shop" component={ShopComponent}/>
                    <Route path="/signIn" component={()=><SignInSignUp currentUser={this.state.currentUser}/>}/>
                </Switch>
            </div>
        )
    }
}
export default App;