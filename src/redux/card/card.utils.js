export const addItemToCard = function(cardItems,cardItemToAdd) {
    const existingItem = cardItems.find(item=>item.id==cardItemToAdd.id)

    if(existingItem){
        return cardItems.map(item=>item.id==cardItemToAdd.id?{...item,quantity:item.quantity+1}:item)
    }
    else {
        return [...cardItems, {...cardItemToAdd,quantity:1}]
    }
}


export const decreaseItems = (cardItems,payload) => {

    const existing = cardItems.find(item=>item.id==payload.id)

    if (existing.quantity==1){
        return (
            cardItems.filter(function (item) {
                return item.id !== payload.id
            })
        )
    }

    return cardItems.map(function (item) {
        if(item.id==payload.id){
            return {...item,quantity:item.quantity-1}
        }
        else return item
    })

}

