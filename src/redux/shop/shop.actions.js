import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => ({ 
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailed = () => ({ 
    type: shopActionTypes.FETCH_COLLECTIONS_FAILED
})

