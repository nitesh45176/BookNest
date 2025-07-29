import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function ContactPage() {
  return (
   
    <>
    <div>
       <Navbar />
    </div>
    <div className='min-h-screen'>
        <Contact  />
    </div>
     <Footer />
    </>
  )
}

export default ContactPage