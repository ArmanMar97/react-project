import {combineReducers} from "redux";
import userReducer from "./user/user-reducer";
import cardReducer from "./card/card-reducer";
import {cardAddItem} from "./card/card-action";


export default combineReducers({
    user:userReducer,
    card:cardReducer,
    addToCard:cardAddItem
})