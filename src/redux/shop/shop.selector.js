import { createSelector } from 'reselect';


const ShopDataSelector = state => state.shop;

export const getCollectionData = createSelector(
    [ShopDataSelector],
    (shop) => shop.collections
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [getCollectionData],
        collections => collections[collectionUrlParam]);

export const selectCollectionForPreview = createSelector(
    [getCollectionData],
    collections => Object.keys(collections).map(
        key => collections[key])
);
