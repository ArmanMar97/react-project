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
                cardItems: state.cardItems.map(function (item) {
                    if (item.id==action.payload.id) {
                        if (item.quantity>1){
                            return {...item,quantity: item.quantity - 1}
                        }
                    }
                    else return item
                })
            }
        default:
            return state
    }
}
export default cardReducer;