import { 
    takeLatest, 
    call,
    put, 
    all 
    } from 'redux-saga/effects'; //Non blocking call

import { 
    fetchCollectionsSuccess,
    fetchCollectionsFailed
} from '../shop/shop.actions.js';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';
import shopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
    try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);//call takes method or function as first argument and parameter as second
        yield put(fetchCollectionsSuccess(collectionsMap))

    } catch(error) {
        yield put(fetchCollectionsFailed())
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}