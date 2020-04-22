import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
    SignInSuccess,
    SignInFailure
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
         yield getSnapshotFromAuth(user);
    } catch(error) {
        yield put(SignInFailure(error));
    }
}

export function* signInWithEmail({ payload: { email, password }}) {
    try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromAuth(user);    
    } catch(error) {
        yield put(SignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionsTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* getSnapshotFromAuth(userAuth) {
    try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get();
        yield put(SignInSuccess({ 
            id: userSnapshot.id, 
            ...userSnapshot.data()
        }))
    } catch(error) {
        yield put(SignInFailure(error));
    }
}

export function* userSagas() {
    yield all([
            call(onGoogleSignInStart),
            call(onEmailSignInStart)
            ])
}