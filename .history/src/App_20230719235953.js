import React from 'react'
import './App.css'
import NavBar from './components/Navbars'
import Loading from './components/loading'
import Numbers from './components/numbers'
import AboutUs from './components/AboutUs'
import FoodImage from './components/FoodImage'
import OurStory from './components/OurStory'
import Explore from './components/Explore'
import Testimonials from './components/Testimonials'
import Frequently from './components/Frequently'
import Baked from './components/Amr'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const App = () => {
 return(
  <div>
    <NavBar/>
    <>
    <Loading/>
    <Numbers/>
    <AboutUs/>
    <FoodImage/>
    <OurStory/>
    <Explore/>
    <Testimonials/>
    <Frequently/>
    <Baked/>
    <Subscribe/>
    <Footer/>
    </>
  </div>
 )
}

export default App
