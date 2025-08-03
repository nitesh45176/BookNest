import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Freebook() {
  const[book, setBook] = useState([]);
  useEffect(()=> {
    const getBook = async ()=> {
      try {
        const res = await axios.get("https://booknest-2-coi9.onrender.com/books");
        console.log(res.data);
        setBook(res.data.filter((data)=> data.category === "Free"));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    getBook()
  }, [])

   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <> 
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div>
           <h1 className='text-xl font-bold my-6'>Free Offered Courses</h1> 
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est veritatis fugit facere delectus velit, iure maiores dignissimos consequatur perspiciatis deserunt dolore sapiente sed possimus cum mollitia explicabo at aut beatae.</p>
        </div>
   
    <div>
      <Slider {...settings}>
        {book.map((item)=> {
          return <Cards item={item} key ={item.id} />
        })} 
      </Slider>
    </div>
     </div></>
  )
}

export default Freebook