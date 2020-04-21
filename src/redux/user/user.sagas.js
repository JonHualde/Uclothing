import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
    googleSignInSuccess,
    googleSignInFailure
} from './user.actions.js';

import userActionsTypes from './user.types.js';
import { 
    auth, 
    googleProvider,
    createUserProfileDocument 
} from '../../firebase/firebase.utils.js';


export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get();
            yield put(googleSignInSuccess({ 
                id: userSnapshot.id, 
                ...userSnapshot.data()
            }))

    } catch(error) {
            yield put(googleSignInFailure(error))
        console.log("There has been an error while logging in, please retry", error)
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}