import { useEffect, useState } from "react"

const useNotes =() =>{

    const [notes, setNotes] = useState([]);
    
    useEffect(()=>{
        fetch('https://lit-tor-87705.herokuapp.com/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    }, [notes])

    return [notes, setNotes];

}

export default useNotes;