import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../pages/Contact/ContactUs'
import LandPageLayout from '../components/Layout/LandPageLayout'
import About from '../pages/About/About'
import Hero from '../pages/Hero/Hero'
import Services from '../pages/Services/Services'
import Team from '../pages/Team/Team'
import Projects from '../pages/Projects/Projects'
import Testimonial from '../pages/Testimonial/Testimonial'
import Login from '../pages/LoginPage/Login'


const Router = () => {

  return (
    <Routes>
      <Route>
        <Route path='/' element={<LandPageLayout/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/login' element={<Login/>} />
      </Route>
    </Routes>
  )
}

export default Router