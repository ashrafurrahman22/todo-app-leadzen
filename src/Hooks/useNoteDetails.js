import { useEffect, useState } from "react"

const useNoteDetails = notesId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/notes/${notesId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [notesId, data])
}

export default useNoteDetails;