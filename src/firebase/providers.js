import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = async() => {

    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;
        // console.log(user);

        return {
            ok: true, 
            displayName, email, photoURL, uid 
        };

    } catch (error) {
        // console.log(error);
        return {
            ok: false, 
            errorMessage: error.message
        };
    }

}

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    // console.log({ email, password, displayName });
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        // console.log(resp);
        // ToDO: Actualizar el displayName en firebase
        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
            ok: true, 
            uid, displayName, email, photoURL
        };

    } catch (error) {
        // console.log(error);
        return {
            ok: false, 
            errorMessage: error.message
        };
    }
}

export const loginWithEmailPassword = async({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        // console.log(resp);
        const { displayName, photoURL, uid } = resp.user;

        return {
            ok: true,
            uid, displayName, email, photoURL
        };

    } catch (error) {
        // console.log(error);
        return {
            ok: false, 
            errorMessage: error.message
        };
    }
}

export const logoutFirebase = async() => {
    // cierra cualquier metodo de autenticacion Google, Facebook, Twitter
    return await FirebaseAuth.signOut();
}