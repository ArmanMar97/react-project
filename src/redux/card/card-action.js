import cardActionTypes from "./card-actions-type";

export const cardAction = () => ({
    type:cardActionTypes.TOGGLE_HIDDEN,
})

export const cardAddItem = (item) =>({
    type:cardActionTypes.ADD_ITEM,
    payload:item
})

export const clearItemFromCard = (item) => ({
    type:cardActionTypes.CLEAR_ITEM_FROM_CARD,
    payload:item
})

export const removeItemFromCard = (item) => ({
    type:cardActionTypes.REMOVE_ITEM,
    payload:item
})

