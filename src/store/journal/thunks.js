import { async } from "@firebase/util"


export const startNewNot = () =>{
    return async( dispatch ) =>{
    //uid usuario
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),

        }
        
        //dispatch
        //dispatch( newNote )
        //dispatch( activarNote )
        






    }
}
