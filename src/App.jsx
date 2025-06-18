import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Naviagtion from './components/Naviagtion'
import CarLogo from './components/CarLogo'
// import CarBodyType from './components/CarBodyType'
import Collection from './components/Collection'
import Guid from './components/Guid'
import Service from './components/Service'
import Review from './components/Review'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Naviagtion/>
      <Hero/>
      <CarLogo/>
      <Collection/>
      <Guid/>
      <Service/>
      <Review/>
      <Footer/>
      {/* <CarBodyType/> */}
    </>
  )
}

export default App
