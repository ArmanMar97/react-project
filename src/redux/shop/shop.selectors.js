import {createSelector} from "reselect";

const selectShop = (state) => state.shop

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = (collectionUrlParam) => createSelector(
    [selectShopItems],
    collections => collections? collections[collectionUrlParam]:collections
)

export const selectCollectionForPreview = createSelector(
    [selectShopItems],
    collection => collection ? Object.keys(collection).map(key=>collection[key]) : []
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)
