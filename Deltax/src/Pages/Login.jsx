
import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Redux/User/userAction";
import { Link } from "react-router-dom";

const Login = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const isAuth = useSelector(store =>store.User.isAuth);
  const user = useSelector((store)=>store.User.isAuth);

  const [err, setError]=useState({});
  const [isSubmit,setIsSubmit] = useState(false);
  const [loginData,setLogindata]=useState({
    email:"",
    password:""

  });
  
  const LoginValidations=(val)=>{
   
    const err={};
    var regexEmail = /\S+@\S+\.\S+/;
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(!val.email){
      err.email="email is required";
    }else if(!regexEmail.test(val.email)){
      err.email="Please enter valid email address!"
    }
    if(!val.password){
      err.password="password is required";
    }else if(val.password.length < 6){
      err.password= "password should have atleast 6 characters!";    
    }else if(!regexPassword.test(val.password)){
      err.password= "password should have strings,numbers,symblys!";    
    }
    return err;
  };

  
  const handelLogin=(e)=>{
    const {name,value}=e.target;
    setLogindata({...loginData,[name]:value});
   
  }
  

  const loginValidData=()=>{
    setError(LoginValidations(loginData));
    setIsSubmit(true);
    
  }
  
  useEffect(()=>{
    if(Object.keys(err).length === 0 && isSubmit  ){
      dispatch(LoginUser(loginData)).then((r)=>{
        if(r.payload.type=="USERSUCCESS"){
          navigate("/",{replace:true});
        }
        else{
          navigate("/login");
        }
      })
    }
 },[err]);

  return (
    <Container style={{width:"50%"}} >
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control name="email" onChange={handelLogin} type="email" placeholder="Enter Email Address" />
      </FloatingLabel>
      <p>{err?.email}</p>

      <FloatingLabel
        controlId="floatingInput"
        label="password"
        className="mb-3"
      >
        <Form.Control name="password" onChange={handelLogin} type="password" placeholder="Enter Password" />
      </FloatingLabel>
      <p>{err?.password}</p>
      
  
      <Button variant="success"  onClick={loginValidData} >
        Login
      </Button>
      {(Object.keys(err).length === 0 && isSubmit && user.createdAt)?<span>Login Successfully</span>:""}
     
      <h5>If you don't have any account <Link to="/register" >Register</Link> </h5>

    </Form>
    </Container>
  )
}

export default Login;