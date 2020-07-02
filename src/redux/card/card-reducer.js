import cardActionTypes from "./card-actions-type";

const INITIAL_STATE = {
    hidden:true
}

const cardReducer = (state = INITIAL_STATE,action) => {
    switch (action.type){
        case cardActionTypes.TOGGLE_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        default:
            return state
    }
}
export default cardReducer;