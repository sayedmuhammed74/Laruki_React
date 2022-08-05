import React from 'react'
import Navbar from './Components/Navbar'
import Showcase from './Components/Showcase'
import Status from './Components/Status'
import Cli from './Components/Cli'
import Cloud from './Components/Cloud'
import Languages from './Components/Languages'
import Footer from './Components/Footer'
import Head from './Components/Head'
import Subhead from './Components/Subhead'
import DocsHead from './Components/DocsHead'
import DocsMain from './Components/DocsMain'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={
          <>
            <Showcase />
            <Status />
            <Cli />
            <Cloud />
            <Languages />
          </>}/>
          <Route path='/features' element={
          <>
            <Head />
            <Subhead />
          </>}/>
          <Route path='/docs' element={
          <>
          <DocsHead />
          <DocsMain />
          </>}/>
        </Routes>

        <Footer />
        
    </>
  )
}

export default App