import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './forROuter/Home'
import Contact from './forROuter/Contact'

const Ten = () => {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>

        
    </Routes>
    </BrowserRouter>
  )
}

export default Ten
