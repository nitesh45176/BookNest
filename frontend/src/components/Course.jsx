import React from 'react'
import list from '../assets/list.json'
import Cards from './Cards'
import {Link} from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Course() {
  const[book, setBook] = useState([]);
  useEffect(()=> {
    const getBook = async ()=> {
      try {
        const res = await axios.get("http://localhost:4001/books");
        setBook(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    getBook()
  }, [])
  return (
    <>
    <div className='max-w-screen-20xl container mx-auto md:px-20  '>
      <div className='pt-34 items-center justify-content-center text-center'>
         <h1 className='text-xl md:text-3xl font-bold '>We're delighted to have you <span className='text-blue-900'>here</span> :)</h1>

         <p className='text-sm md:text-base font-medium m-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt ea impedit, quam molestias vero? Distinctio quos ducimus minus magnam, quas quia exercitationem perferendis. Maxime nemo totam, qui explicabo recusandae in officiis quidem itaque amet commodi illum sapiente inventore reprehenderit?</p>
        <Link to="/">
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-7 hover:bg-blue-700 duration-300 cursor-pointer'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
          { book.map((item) => (
            <Cards key={item.id} item={item}/>
          ))
        }

      </div>
      </div></>
  )
}

export default Course