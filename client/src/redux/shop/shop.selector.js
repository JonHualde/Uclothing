import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const getCollectionData = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [getCollectionData],
        collections => collections ? collections[collectionUrlParam]
         : null
    );

export const selectCollectionForPreview = createSelector(
    [getCollectionData],
    collections => collections ? Object.keys(collections).map(
        key => collections[key])
    : []
);

export const selectLoadingState = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const SelectionCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)
