import { useEffect, useState } from "react"

const useNoteDetails = notesId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `https://lit-tor-87705.herokuapp.com/notes/${notesId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [notesId, data])
}

export default useNoteDetails;