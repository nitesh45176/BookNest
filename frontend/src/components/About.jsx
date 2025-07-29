import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 '>
      <div className='text-center mb-10'>
        <h1 className='text-3xl md:text-4xl font-bold mb-4'>
          About <span className='text-blue-900'>Us</span>
        </h1>
        <p className='text-base md:text-lg text-neutral-300 max-w-3xl mx-auto'>
          Welcome to <span className='font-semibold text-blue-900'>BookNest</span> — your ultimate destination for free and premium educational books.
          Whether you're a curious student, an aspiring professional, or a lifelong learner, we provide a collection of books to elevate your knowledge
          and unlock your potential.
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-10 items-center'>
        <img
          src='https://images.unsplash.com/photo-1524995997946-a1c2e315a42f'
          alt='About illustration'
          className='rounded-2xl shadow-lg w-full h-auto object-cover'
        />

        <div>
          <h2 className='text-2xl font-semibold mb-4 text-neutral-200'>
            Why Choose <span className='text-blue-900'>BookNest?</span>
          </h2>
          <ul className='list-disc pl-5 space-y-2 text-neutral-500'>
            <li>📚 A growing collection of hand-picked books</li>
            <li>🆓 Free access to high-quality learning materials</li>
            <li>💡 Ideal for students, professionals, and hobby readers</li>
            <li>📱 Easy to browse, responsive design</li>
            <li>🛒 Simple checkout for premium resources</li>
          </ul>

          <Link to='/'>
            <button className='bg-blue-500 text-white px-6 py-2 rounded-md mt-6 hover:bg-blue-700 transition-all duration-300'>
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
