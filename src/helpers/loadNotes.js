import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async( uid = '' ) => {

    if ( !uid ) throw new Error('El uid del usuario no existe');
    try {
        const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
        const docs = await getDocs( collectionRef );

        // console.log(docs);
        const notes = [];

        // recomended by gpt to define imageUrls attribute
        docs.forEach(doc => {
            const data = doc.data();
            notes.push({
                id: doc.id,
                ...data,
                imageUrls: data.imageUrls || [] // asegura que siempre exista
            });
        });

        // Lo remplace por sugerecia IA
        // docs.forEach( doc => {
        //     // console.log(doc.data());
        //     notes.push( { id: doc.id, ...doc.data() } )
        // });
        // console.log(notes);
        return notes;
        
    } catch (error) {
        console.log('error cargando notas', error);
        return []
    }
}