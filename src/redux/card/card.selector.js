import {createSelector} from "reselect";

const selectCard =  (state) => state.card

export const selectCardHidden = createSelector(
    [selectCard],
    (card) => card.hidden
)

export const selectCardItems = createSelector(
    [selectCard],
    (card) => card.cardItems
)

export const selectCardItemsCount = createSelector(
    [selectCardItems],
    (cardItems) => cardItems.reduce((firstValue,item)=>firstValue+item.quantity,0)
)