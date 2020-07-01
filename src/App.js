import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import "./App.css";
import HomepageComponent from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop-page/shopComponent";
import Header from "./components/header/Header";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up-page";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";

class App extends React.Component{
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth)=>{
            if (userAuth){
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id:snapshot.id,
                        ...snapshot.data()
                    })
                })
            }
            else setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomepageComponent}/>
                    <Route path="/shop" component={ShopComponent}/>
                    <Route exact path="/signIn" component={()=><SignInSignUp currentUser={setCurrentUser}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser:(user) => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);