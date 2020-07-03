function addItemToCard(cardItems,cardItemToAdd) {
    const existingItem = cardItems.find(item=>item.id==cardItemToAdd.id)

    if(existingItem){
        return cardItems.map(item=>item.id==cardItemToAdd.id?{...item,quantity:item.quantity+1}:item)
    }
    else {
        return [...cardItems, {...cardItemToAdd,quantity:1}]
    }
}

export default addItemToCard;