import React from 'react'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({onSearch}) => {
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
  
    const submitHandler = (event) => {
        event.preventDefault();
        onSearch(city,zip);
      };
    
      return (
         <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
         <form
           onSubmit={submitHandler}
           className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
         >
           <div>
             <input
               onChange={(event) => setCity(event.target.value) && setZip(event.target.value)}
               className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white'
               type='text'
               placeholder='Search city or zip code'
             />
           </div>
           <button onClick={submitHandler}>
             <BsSearch size={21} className='items-center'/>
           </button>
         </form>
       </div>
      );
    };
    
    export default Search;
