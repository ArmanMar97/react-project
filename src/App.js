import React from 'react';
import {Switch,Route} from "react-router-dom";
import "./App.css";
import HomepageComponent from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop-page/shopComponent";
import Header from "./components/header/Header";

function App() {
    return(
        <div>
            {/*<Switch>*/}
                <Header/>
                <Route exact path="/" component={HomepageComponent}/>
                <Route exact path="/shop" component={ShopComponent}/>
            {/*</Switch>*/}
        </div>
    )
}
export default App;