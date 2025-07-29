import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
     <div className='flex flex-col gap-15'>
    <div>
       <Navbar />
    </div>
    <div className='min-h-screen mx-4'>
        <About />
    </div>
     <Footer />
    </div>

    
  )
}

export default AboutPage