import React from 'react'
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Achivements from './Components/Achivements';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Achivements/>
      <Contact/>
     <Footer/>
    </div>
  )
}

export default App
