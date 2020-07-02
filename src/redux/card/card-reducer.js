import cardActionTypes from "./card-actions-type";
import {addItemToCard} from "./card.utils";

const INITIAL_STATE = {
    hidden:true,
    cardItems:[]
}

const cardReducer = (state = INITIAL_STATE,action) => {
    switch (action.type){
        case cardActionTypes.TOGGLE_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case cardActionTypes.ADD_ITEM:
            return {
                ...state,
                cardItems: addItemToCard(state.cardItems,action.payload)
            }
        default:
            return state
    }
}
export default cardReducer;