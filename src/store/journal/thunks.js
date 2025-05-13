import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";

// Importante: thunk es cuando tengo que despachar acciones asincronas
export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch( savingNewNote() );
        
        // console.log(getState()); // para ver el estado
        const { uid } = getState().auth;

        // console.log(uid);
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );

        const setDocResp = await setDoc( newDoc, newNote ); // Para guardarlo
        // console.log({newDoc, setDocResp});

        newNote.id = newDoc.id;

        
        // Los dispatch son acciones que despachan acciones asincronas
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El usuario no está autenticado');
        // console.log({uid});
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}