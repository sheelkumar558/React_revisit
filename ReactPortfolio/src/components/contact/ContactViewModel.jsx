import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";

let ContactViewModel = [
  {
    title: "Email",
    subtitle: "sheelkumar558@gmail.com",
    logo: <HiOutlineMail />,
    href: "mailto:sheelkumar558@gmail.com",
  },
  {
    title: "Messenger",
    subtitle: "SheelKumar",
    logo: <FaFacebookMessenger />,
    href: "###",
  },
  {
    title: "WhatsApp",
    subtitle: "+916388801271",
    logo: <IoLogoWhatsapp />,
    href: "###",
  },
];

export default ContactViewModel;
