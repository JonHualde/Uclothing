import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    error: false
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTIONS_START:
        return {
            ...state, 
            isFetching: true
        }

        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return {
            ...state, 
            collections: action.payload,
            isFetching: false
        }

        case shopActionTypes.FETCH_COLLECTIONS_FAILED:
        return {
            ...state, 
            isFetching: false,
            error: true
        }

        default:
            return state;
    }
}

export default collectionsReducer;