import cardActionTypes from "./card-actions-type";
import {addItemToCard,increaseQuantity} from "./card.utils";

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
        case cardActionTypes.CLEAR_ITEM_FROM_CARD:
            return {
                ...state,
                cardItems: state.cardItems.filter(item=>(
                    item.id!==action.payload.id
                ))
            }
        case cardActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cardItems: increaseQuantity(state.cardItems,action.payload)
            }
        default:
            return state
    }
}
export default cardReducer;