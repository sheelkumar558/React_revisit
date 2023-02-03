import React from "react";
import "./nav.css";
import img from "../img/Vector.png";
import img1 from "../img/Vector1.png";
import grp1 from "../img/Group 652.png";
import grp2 from "../img/Group 631.png";
import grp3 from "../img/Group 651.png";
import grp4 from "../img/Group 2053.png";
import mam from "../img/Group 2052.png";
import serv from "../img/SERVICES.png";
import grp5 from "../img/Group 2058.png";
import grp6 from "../img/Group 2059.png";
import grp7 from "../img/Group 2060.png";
import our from "../img/Our Capabilities.png";
import mam1 from "../img/Group 2073.png";
import bes1 from "../img/Besnik1.png";
import bes2 from "../img/Besnik2.png";
import s1 from "../img/design-thinking.png";
import s2 from "../img/setting.png";
import s3 from "../img/blub.png";
import s4 from "../img/mobile.png";
import s5 from "../img/s21.png";
import s6 from "../img/s22.png";
import s7 from "../img/s23.png";
import r1 from "../img/Rectangle1.png";
import r2 from "../img/Rectangle2.png";
import r3 from "../img/Rectangle3.png";
import r4 from "../img/Rectangle4.png";
import r5 from "../img/Rectangle5.png";
export const Navbar = () => {
  return (
    <>
      <div className="main-nav">
        <div className="logo">
          <h1>webure Tech</h1>
        </div>
        <div className="navPageLink">
          <p className="ptag">About Us</p>
          <p className="ptag">Servies</p>
          <p className="ptag">Careers</p>
          <p className="ptag">ROI Stories</p>
          <p className="ptag">Blog</p>
          <p className="ptag">Contact Us</p>
        </div>
        <div className="btnNav">
          <button className="btn-f">Let's Talk</button>
        </div>
      </div>
      <div>
        <div className="main-f">
          <div className="f-h">
            <img
              width="10px"
              height="10px"
              style={{
                marginTop: "20px",
              }}
              src={img1}
              alt=""
            />
            <p>Best Business Platform - World Record 2021</p>
          </div>
          <div className="s-h">
            <h1>Reach Your Business Goals in Record Time</h1>
          </div>
          <div className="t-h">
            <p>
              Support small business and join the nationwide movement to
              encourage commercial support for the millions of minority owned
              businesses helping world economy.
            </p>
          </div>
          <div className="ft-h">
            <button className="btn-s">Get Stared</button>
            <img
              width="25px"
              height="20px"
              style={{
                marginTop: "20px",
              }}
              src={img}
              alt=""
            />
            <p>Book a 30 Min Quick Meeting</p>
          </div>
        </div>
        <div>
          <img className="img1" src={mam} alt="" />
        </div>
      </div>
      <div>
        <div className="for-img">
          <div>
            {" "}
            <img width="120px" height="70px" src={grp1} alt="" />
          </div>
          <div>
            {" "}
            <img width="120px" height="70px" src={grp2} alt="" />
          </div>
          <div>
            {" "}
            <img width="420px" height="170px" src={grp3} alt="" />
          </div>
          <div>
            {" "}
            <img width="120px" height="70px" src={grp4} alt="" />
          </div>
        </div>
      </div>
      <div className="div-1">
        <div className="serv">
          <img src={serv} alt="" />
          <img width="200px" src={our} alt="" />
          <p>
            We will bring the breathe of our experience and industry knowledge
            to help you succeed
          </p>
        </div>
        <div className="div-im">
          <img height="220px" src={grp7} alt="" />
        </div>
        <div className="div-im">
          <img height="220px" src={grp5} alt="" />
        </div>
        <div className="div-im">
          <img height="300px" src={grp6} alt="" />
        </div>
      </div>
      <div className="digital">
        <div>
          <img width="370px" src={mam1} alt="" />
        </div>
        <div>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: "320",
              fontSize: "16px",
              lineHeight: "18px",

              color: " #F17216",
            }}
          >
            WHY CHOOSE US
          </p>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "26px",
              lineHeight: "40px",
              letterSpacing: " 0.01em",
              color: "#FFFFFF",
            }}
          >
            Take on any Challenge of the Digital World
          </p>
          <div className="dit-1">
            <img
              width="10px"
              height="10px"
              style={{
                marginTop: "20px",
              }}
              src={img1}
              alt=""
            />
            <p>Corporate Financial Advisory</p>
          </div>
          <div className="dit-1">
            <img
              width="10px"
              height="10px"
              style={{
                marginTop: "20px",
              }}
              src={img1}
              alt=""
            />
            <p>Development of Financial Models</p>
          </div>
          <div className="dit-1">
            <img
              width="10px"
              height="10px"
              style={{
                marginTop: "20px",
              }}
              src={img1}
              alt=""
            />
            <p>Deal Structuring</p>
          </div>
          <div className="dit-1">
            <input
              style={{
                border: "none",
                backgroundColor: "rgb(19, 19, 49)",
                color: "#FFFFFF",
              }}
              type="text"
              placeholder="Enter your email ID"
            />

            <button
              style={{
                border: "none",
                color: "#FFFFFF",
              }}
              className="btn-s"
            >
              Get Stared
            </button>
          </div>
        </div>
      </div>
      <div>
        <img width="95%" src={bes1} alt="" />
      </div>
      <div>
        <img width="95%" src={bes2} alt="" />
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>What We Do</h1>
      </div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          width: "80%",
        }}
      >
        <div
          style={{
            width: "150px",
          }}
        >
          <h1
            style={{
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "44px",

              color: "#000000",
            }}
          >
            Our Services
          </h1>
        </div>
        <div
          style={{
            padding: "20px",
            width: "500px",
            marginLift: "20px",
          }}
        >
          <p
            style={{
              position: "absolute",

              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "17px",
              lineHeight: "24px",

              color: "#A9A9A9",
              width: "900px",
            }}
          >
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature
          </p>
        </div>
      </div>
      <div className="degn">
        <div
          style={{
            color: "white",
            backgroundColor: "rgb(24, 24, 163)",
          }}
          className="degn-1"
        >
          <img src={s1} alt="" />
          <p className="p2">Design</p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="degn-1">
          <img src={s2} alt="" />
          <p className="p2">Front End Development</p>
        </div>
        <div className="degn-1">
          <img src={s3} alt="" />
          <p className="p2">Back End Development</p>
        </div>
        <div className="degn-1">
          <img src={s4} alt="" />
          <p className="p2">Application Development</p>
        </div>
      </div>
      <div className="degn">
        <div className="degn-1">
          <img src={s3} alt="" />
          <p className="p2">Cloud Services</p>
        </div>
        <div className="degn-1">
          <img src={s5} alt="" />
          <p className="p2">Analytics</p>
        </div>
        <div className="degn-1">
          <img src={s6} alt="" />
          <p className="p2">Q-A And Testing</p>
        </div>
        <div className="degn-1">
          <img src={s7} alt="" />
          <p className="p2">Back Office Support</p>
        </div>
      </div>
      <div className="div-3">
        <div className="div-31">
          <img src={r1} alt="" />
          <p>Cosmetic Forcest Marketing</p>
        </div>
        <div className="div-31">
          <img src={r2} alt="" />
          <p>Sales Analytic</p>
        </div>
        <div className="div-31">
          <img src={r3} alt="" />
          <p>Fashion Store Mobile Apps</p>
        </div>
      </div>
      <div className="div-3">
        <div className="div-31">
          <img src={r4} alt="" />
          <p>Laura’s Clore Branding Identity</p>
        </div>
        <div className="div-31">
          <img src={r5} alt="" />
          <p>SEO Marketing 4.0</p>
        </div>
        <div>
          <p className="f-h">Projects</p>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "44px",

              color: "rgb(61, 48, 48)",
            }}
          >
            Selected Works from Us
          </p>
          <button className="btn-l">See More</button>
        </div>
      </div>
    </>
  );
};
