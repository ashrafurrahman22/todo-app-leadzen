import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Tables from '../Tables';

const Home = () => {



    const { register, handleSubmit, reset } = useForm();

  
  const onSubmit = data => {
    console.log(data)

    axios.post('https://lit-tor-87705.herokuapp.com/notes', data)
    .then(response =>{
      const {data} = response;
      console.log(response);
        if(data.insertedId){
        reset();
        toast.success('notes added');
        }
    });
  };



    return (
        <div className='min-h-screen p-20 flex justify-center items-center w-full bg-slate-700'>


            <div className='card pb-10 bg-base-100 text-black shadow-2xl w-2/3'>

            <h2 style={{fontFamily:"poppins"}} className='text-center pt-8 text-2xl font-semibold'>To-Do-App</h2>

           <div className='py-5 flex justify-center items-center'>

           <form className='flex items-center gap-3' onSubmit={handleSubmit(onSubmit)}>
      <textarea placeholder='Write Your Notes' className='border w-96  border-slate-600 p-2 rounded-xl' type='text' {...register("notes", {required:true})}  />

      <input className='rounded px-5 btn btn-primary' type="submit" value="add Notes"/>
      </form>
           </div>

            <div>
                <Tables></Tables>
            </div>

        </div>
        </div>
    );
};

export default Home;