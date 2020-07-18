import {createSelector} from "reselect";

const selectShop = (state) => state.shop

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectShopItems],
    collections => collections[collectionUrlParam]
)

export const selectCollectionForPreview = createSelector(
    [selectShopItems],
    collection => Object.keys(collection).map(key=>collection[key])
)
