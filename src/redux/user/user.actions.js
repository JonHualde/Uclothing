import userActionsTypes from './user.types';

export const checkUserSession = () => ({
    type: userActionsTypes.CHECK_USER_SESSION
})



export const googleSignInStart = () => ({ 
    type: userActionsTypes.GOOGLE_SIGN_IN_START,
})

export const emailSignInStart = (emailAndPassword) => ({ 
    type: userActionsTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const emailSignUpStart = (credentials) => ({ 
    type: userActionsTypes.EMAIL_SIGN_UP_START,
    payload: credentials
})



export const SignInSuccess = user => ({ 
    type: userActionsTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const SignInFailure = error => ({ 
    type: userActionsTypes.SIGN_IN_FAILURE,
    payload: error
})

export const signUpSuccess = ({ user, additionalData }) => ({
    type: userActionsTypes.EMAIL_SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});

export const signUpFailure = error => ({
    type: userActionsTypes.EMAIL_SIGN_UP_FAILURE,
    payload: error
});



export const signedOutStart = () => ({
    type: userActionsTypes.USER_SIGNED_OUT_START
})

export const signedOutSuccess = () => ({
    type: userActionsTypes.USER_SIGNED_OUT_SUCCESS
})

export const signedOutFailure = error => ({
    type: userActionsTypes.USER_SIGNED_OUT_FAILURE,
    payload: error
})