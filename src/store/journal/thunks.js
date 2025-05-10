import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

// Importante: thunk es cuando tengo que despachar acciones asincronas
export const startNewNote = () => {
    return async(dispatch, getState) => {
        
        console.log(getState()); // para ver el estado
        const { uid } = getState().auth;

        console.log(uid);
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );

        const setDocResp = await setDoc( newDoc, newNote ); // Para guardarlo
        console.log({newDoc, setDocResp});

        
        // Los dispatch son acciones que despachan acciones asincronas
        // dispatch( newNote )
        // dispatch( activateNote )
        
    }
}