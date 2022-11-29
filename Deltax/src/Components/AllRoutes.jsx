import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddSong from '../Pages/AddSong'
import Artists from '../Pages/Artists'
import Login from '../Pages/Login'
import Register from '../Pages/Register';
import Songs from '../Pages/Songs'
import Error from './Error'
import PrivateRoute from './privateRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Songs/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/addsong" element={<PrivateRoute><AddSong/></PrivateRoute>} />
      <Route path='/artist' element={<PrivateRoute><Artists/></PrivateRoute>} />
      <Route path="*" element={<Error/>}  />
    </Routes>
  )
}

export default AllRoutes