import { async } from '@firebase/util';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { startCreatingUserWithEmailPassword } from '../store/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() =>{

    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        // console.log({user});
        const {displayName, email, photoURL, uid} = result.user;

        return { 
            ok: true,
            // user info
            displayName, email, photoURL, uid
        }
        

    } catch (error) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;


        return{
            ok: false,
            errorMessage
           
        }
        
    }


}

export const registerUserAndPassword = async( { email, password, displayName } ) =>{

    console.log({email, password, displayName})

    try {
        const resp = await  createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        // Todo: Actualizar el displayName
        await updateProfile( FirebaseAuth.currentUser, { displayName } )

        return {
            ok: true,
            uid, photoURL, email, displayName
        }


    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message }
    }

}

export const LoginWithEmailPassword = async({ email, password }) => {


    console.log({email, password})

    try {
        const resp = await  signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName} = resp.user;
        // Todo: Actualizar el displayName

        return {
            ok: true,
            uid, photoURL, email
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }

}

export const logoutFirebase = async() =>{
    return await FirebaseAuth.signOut();
}