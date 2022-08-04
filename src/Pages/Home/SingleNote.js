import React from 'react';
import { toast } from 'react-toastify';

const SingleNote = ({note}) => {

    // delete
    const handleDelete = id =>{
        const procede = window.confirm('Are You Sure?');
        if(procede){
          const url = `http://localhost:5000/notes/${id}`
          fetch(url, {
            method : "DELETE"
          })
          .then(res => {
              res.json()
            toast.success("Successfully deleted")
            })
          .then(data => {
            console.log(data)
          })
        }
      }


    return (
        <tr>
        <td className=''>{note.notes}</td>
        <td><button className='btn btn-primary'>Edit</button></td>
        <td><button onClick={()=>handleDelete(note._id)}  className='btn hover:btn-warning bg-yellow-400 border-0 text-black'>Delete</button></td>

      </tr>
    );
};

export default SingleNote;