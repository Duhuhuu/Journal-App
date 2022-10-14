import { collection, getDocs, query } from "firebase/firestore/lite";
import { FirebaseDB, } from "../firebase/config";
// VERSION OBSOLETA!!!!.

// export const loadNotes = async( uid = '' ) => {
//     if ( !uid ) throw new Error('El UID del Usuario No existe');

//     const collectionRef = collection(FirebaseDB,  `${uid}/journal/notes` );

//     const docs = await getDocs(collectionRef);

//     const notes = [];
//     docs.forEach(doc=> {
//         notes.push({ id: doc.id, ...doc.data });
//     })
//  console.log(notes);
//     return notes;
// }

// VERSION NUEVA.
export const loadNotes = async (uid) => {
 
    const docs = await getDocs(query(collection(FirebaseDB, `${ uid }/journal/notes`)));
    const notes = [];
 
    docs.forEach( docs => {
        notes.push({
            id: docs.id,
            ...docs.data()
        })
      });
      
    return notes;
};
