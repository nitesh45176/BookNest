  import React from 'react'

  import Home from './home/Home'
  import Courses from './courses/Courses'

  import { Navigate, Route, Routes } from 'react-router-dom'
  import Signup from './components/Signup'
  import ContactPage from './contact/ContactPage'
import Login from './components/Login'
import About from './about/AboutPage'
import AboutPage from './about/AboutPage'
import ScrollToTop from './components/ScrollToTop'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

  function App() {
     const [authUser] = useAuth(); // ✅ using context
      console.log("Logged in user:", authUser); // ✅ should now show actual user or null
    
    return (
      <>
      {/* <Home />
      <Course /> */}
          <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />}/>
        <Route path="/signup" element={<Signup  />}/>
        <Route path="/about" element={<AboutPage  />}/>
        <Route path="/login" element={<Login  />}/>
        <Route path="/contact" element={<ContactPage  />}/>

      </Routes>
      <Toaster/>
      </>
      
    )
  }

  export default App