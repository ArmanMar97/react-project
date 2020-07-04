export const addItemToCard = function(cardItems,cardItemToAdd) {
    const existingItem = cardItems.find(item=>item.id==cardItemToAdd.id)

    if(existingItem){
        return cardItems.map(item=>item.id==cardItemToAdd.id?{...item,quantity:item.quantity+1}:item)
    }
    else {
        return [...cardItems, {...cardItemToAdd,quantity:1}]
    }
}


export const increaseQuantity = function (cardItems,payload) {
    cardItems.map(function (item) {
        return [...cardItems,{...payload,quantity:payload.quantity-1}]
    })
}

