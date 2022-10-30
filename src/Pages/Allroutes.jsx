import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/' element={<Home/>}>Home</Route>

    </Routes>
  )
}

export default Allroutes