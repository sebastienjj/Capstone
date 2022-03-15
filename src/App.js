import React from 'react'
// import { Article, Brand, Cta} from 
import { Footer, Blog, Features, WhatApp, Header } from './containers'
import { Cta, Brand, Navbar } from './components'
import './App.css'


const App = () => {

  return (

    <div className = "App">
    <div className = "gradient__bg">
      <Navbar />
      <Header />
      </div>
      {/* <Brand /> */}
      <WhatApp />
      {/* <Features /> */}
      {/* <Possibility /> */}
      {/* <Cta />
      <Blog /> */}
      <Footer />
    </div>
  )
}

export default App


