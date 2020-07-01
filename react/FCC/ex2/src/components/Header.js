import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import "./css/header.css";
function Header() {
  return (
    <header>
      <Logo />
      <Navbar />
    </header>
  );
}
export default Header;
