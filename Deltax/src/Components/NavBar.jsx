import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { GiLoveSong } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { registerSucces, userSucces } from "../Redux/User/userAction";

const NavBar = () => {
  const loginInfo = useSelector((store) => store.User.isAuth);
  const isAuth = localStorage.getItem("token");
  const user = localStorage.getItem("User");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const [query, setQuery] = useState("");

  const handelSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {}, [isAuth, dispatch]);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <Image
            height={"50px"}
            src="data:image/png;base64,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"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", cursor: "pointer" }}
            navbarScroll
          >
            <Link to="/">
              {" "}
              <Nav>
                Home <GoHome />
              </Nav>
            </Link>
            <Link to="/songs">
              {" "}
              <Nav>
                Songs
                <GiLoveSong />{" "}
              </Nav>
            </Link>
            <Link to="/artist">
              {" "}
              <Nav>
                Artists
                <BsFillPersonFill />
              </Nav>
            </Link>
            <Link to="/login">
              {" "}
              {isAuth ? (
                <Nav onClick={handelLogout} variant="transparent">
                  Logout
                  <BiLogOutCircle />
                </Nav>
              ) : (
                <Nav>
                  Login
                  <BiLogInCircle />
                </Nav>
              )}{" "}
            </Link>
          </Nav>
          {loginInfo && isAuth ? (
            <Image
              name={"roundedCircle"}
              style={{ width: "30px" }}
              src="data:image/jpeg;base64,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"
            />
          ) : (
            ""
          )}
          {loginInfo && isAuth ? <span>{loginInfo?.name}</span> : ""}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
