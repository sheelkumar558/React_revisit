import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Prompt = () => {
    var navigate=useNavigate();
    var storage=localStorage;
    useEffect(() => {
      
      var name=localStorage.getItem("userName");
      var id=localStorage.getItem("userID");
      if(name==null || name==undefined){
        window.location.reload();
        name=window.prompt("Enter username to create profile");
        id=uuidv4();
        storage.setItem("userName",name);
        storage.setItem("id",id);
      }
      navigate("/auctions")
    })
    
  return (
    <>
    </>
  )
}

export default Prompt