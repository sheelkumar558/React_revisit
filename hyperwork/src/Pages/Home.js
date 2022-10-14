import React from 'react'

import { Navigate, useNavigate } from 'react-router-dom';
import Prompt from '../Components/Prompt';
import { useEffect } from 'react';
const Home = () => {

let uN=localStorage.getItem("userName");
  return (
    <div>
      {uN=="" || uN==undefined ? <Prompt/>:<Navigate to="/auctions"></Navigate>}
        
    </div>
  )
}

export default Home