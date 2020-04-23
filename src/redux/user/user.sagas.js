import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
    SignInSuccess,
    SignInFailure,
    signedOutSuccess,
    signedOutFailure,
    signUpSuccess,
    signUpFailure
} from './user.actions.js';

import { clearOutBasketWhenLoggedOut } from '../cart/cart.actions.js';
import userActionsTypes from './user.types.js';
import { 
    auth, 
    googleProvider,
    createUserProfileDocument,
    getCurrentUser
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
    console.log("first step")
        yield getSnapshotFromAuth(user);    
    } catch(error) {
        yield put(SignInFailure(error));
    }
}

export function* signUpWithEmail({ payload: { email, password, displayName }}) {
    try {
    const { user } = yield auth.createUserWithEmailAndPassword(
        email, 
        password
    )
        yield put(signUpSuccess({ user, additionalData: { displayName} }))
    } catch(error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData }}) {
    try {
        yield getSnapshotFromAuth(user, additionalData)
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* getSnapshotFromAuth(userAuth, additionalData) {
    try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
    const userSnapshot = yield userRef.get();
        yield put(SignInSuccess({ 
            id: userSnapshot.id, 
            ...userSnapshot.data()
        }))
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

export function* onEmailSignUpStart() {
    yield takeLatest(userActionsTypes.EMAIL_SIGN_UP_START, signUpWithEmail)
}

export function* onSignUpSuccess() {
    yield takeLatest(userActionsTypes.EMAIL_SIGN_UP_SUCCESS, signInAfterSignUp )
}


export function* onCheckUserSession() {
    yield takeLatest(userActionsTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* isUserAuthenticated() {
    try {
    const userAuth = yield getCurrentUser();
    if(!userAuth) return 
        yield(getSnapshotFromAuth(userAuth));
    } catch(error) {
        yield put(SignInFailure(error))
    }
}

export function* onSignedOutStart() {
    yield takeLatest(userActionsTypes.USER_SIGNED_OUT_START, signedOut)
}

export function* signedOut() {
    try {
        yield auth.signOut();
        yield put(signedOutSuccess())
        yield put(clearOutBasketWhenLoggedOut())
    } catch(error) {
        yield put(signedOutFailure(error));
    }
}

export function* userSagas() {
    yield all([
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onEmailSignUpStart),
            call(onCheckUserSession),
            call(onSignedOutStart),
            call(onSignUpSuccess)
            ])
}