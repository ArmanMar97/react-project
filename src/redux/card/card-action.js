import cardActionTypes from "./card-actions-type";

export const cardAction = () => ({
    type:cardActionTypes.TOGGLE_HIDDEN,
})

export const cardAddItem = (item) =>({
    type:cardActionTypes.ADD_ITEM,
    payload:item
})

