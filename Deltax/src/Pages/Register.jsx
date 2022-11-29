import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../Redux/User/userAction";


const Register = () => {

  const [err,setError]=useState({});
  const [isSubmit,setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerData,setRegisterdata]=useState({
    name:"",
    email:"",
    password:""

  });
  
  const registerValidations=(val)=>{
   
    const err={};
    
    var regexEmail = /\S+@\S+\.\S+/;
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!val.email){
      err.email="email is required";
    }else if(!regexEmail.test(val.email)){
      err.email="Please enter valid email address!"
    }
    if(!val.name){
      err.name="name is required";
    }else if(val.name.length < 3){
      err.name= "name should have atleast 3 characters!"    
    }else if(val.name.length >= 15){
      err.name= "name should have atmax 15 characters!"    
    }
    if(!val.password){
      err.password="password is required";
    }else if(val.password.length < 6){
      err.password= "password should have atleast 6 characters!"    
    }else if(!regexPassword.test(val.password)){
      err.password= "password should have strings,numbers,symblys!"    
    }
    return err;
  };

  
  const handelRegister=(e)=>{
    const {name,value}=e.target;
    setRegisterdata({...registerData,[name]:value});
    setError(registerValidations(registerData));
  }
  

  const registerValidData=()=>{
    localStorage.setItem("User",registerData?.name);
    setError(registerValidations(registerData));
    setIsSubmit(true);
   
  }

  useEffect(()=>{
    if(Object.keys(err).length === 0 && isSubmit){
        dispatch(RegisterUser(registerData));
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }  
    
  },[err])

  // console.log(registerData);
// console.log(err,"ere")
  return (
    <Container style={{width:"50%"}} >
    <Form>
   
    <FloatingLabel
        controlId="floatingInput"
        label="name"
        className="mb-3"
      >
        <Form.Control name="name" onChange={handelRegister} type="name" placeholder="Enter your name" />
     
      </FloatingLabel>
      <p>{ err?.name }</p>


    

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control name="email" onChange={handelRegister} type="email" placeholder="Enter Email Address" />
      </FloatingLabel>
      <p>{ err?.email }</p>

      <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3"
      >
        <Form.Control name="password" onChange={handelRegister} type="password" placeholder="Enter Password" />
      </FloatingLabel>
      <p  >{ err?.password }</p>

      
  
      <Button variant="success" onClick={registerValidData} >
        Register
      </Button>

      {(Object.keys(err).length === 0 && isSubmit) ? <span> Register SuccessFull</span>: ""}

      <h5>If you already have an account <Link to="/login" >Login</Link> </h5>

    </Form>
    </Container>
  )
}

export default Register;