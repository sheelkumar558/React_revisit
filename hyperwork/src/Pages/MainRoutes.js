import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auction from './Auction'
import Auctions from './Auctions'
import Home from './Home'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auctions" element={<Auctions/>} />
            <Route path="/auctions/:id" element={<Auction/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes