
import { LoginWithEmailPassword, registerUserAndPassword, singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"



export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const {ok, uid, photoURL, errorMessage } = await registerUserAndPassword({ email, password, displayName });
        if (!ok) return dispatch( logout({errorMessage}) )

        dispatch ( login({ uid, displayName, email, photoURL }) );

    }

}

export const startLoginWithEmailPassword = ({email, password}) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await LoginWithEmailPassword({ email, password });
        if ( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ))

    }

}