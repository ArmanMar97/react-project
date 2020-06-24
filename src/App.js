import React from 'react';
import {Switch,Route} from "react-router-dom";
import "./App.css";
import HomepageComponent from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop-page/shopComponent";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up-page";

function App() {
    return(
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomepageComponent}/>
                <Route path="/shop" component={ShopComponent}/>
                <Route path="/signIn" component={SignInSignUp}/>
            </Switch>
        </div>
    )
}
export default App;