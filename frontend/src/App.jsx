  import React from 'react'

  import Home from './home/Home'
  import Courses from './courses/Courses'

  import { Route, Routes } from 'react-router-dom'
  import Signup from './components/Signup'
  import ContactPage from './contact/ContactPage'
import Login from './components/Login'
import About from './about/AboutPage'
import AboutPage from './about/AboutPage'
import ScrollToTop from './components/ScrollToTop'

  function App() {
    return (
      <>
      {/* <Home />
      <Course /> */}
          <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/course" element={<Courses />}/>
        <Route path="/signup" element={<Signup  />}/>
        <Route path="/about" element={<AboutPage  />}/>
        <Route path="/login" element={<Login  />}/>
        <Route path="/contact" element={<ContactPage  />}/>

      </Routes>
      </>
      
    )
  }

  export default App