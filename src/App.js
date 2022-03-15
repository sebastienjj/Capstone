import React from 'react'
// import { Article, Brand, Cta} from 
import { Footer, Blog, Features, WhatApp, Header } from './containers'
import { Cta, Brand, Navbar } from './components'
// import {browserRouter, Route, Switch, linkRouter } from 'react-router-dom'
import './App.css'
// import { Routes, Route } from 'react-router-dom';

// import Home from '../pages/Home';
// import Signup from '../pages/Signup';



const App = () => {
  return (
<div>
{/* <switch>
<Routes>
      <Route path='/' element={Home}></Route>
      <Route path='/signup' element={Signup}></Route>
</Routes>
</switch> */}

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
</div>
  )
}

export default App


