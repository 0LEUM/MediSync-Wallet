import React from 'react'
import Header from '../Header/Header'
import Hero from '../../pages/Hero/Hero'
import About from '../../pages/About/About'
import Services from '../../pages/Services/Services'
import Projects from '../../pages/Projects/Projects'
import Team from '../../pages/Team/Team'
import Testimonial from '../../pages/Testimonial/Testimonial'
import ContactUs from '../../pages/Contact/ContactUs'
import Footer from '../Footer/Footer'

const LandPageLayout = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Services/>
    <Projects/>
    <Team/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default LandPageLayout