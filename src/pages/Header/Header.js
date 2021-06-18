import React from "react";
import { Nav, NavLink, Bars, NavBtn, NavBtnLink } from "./HeaderElement";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { BiKey } from "react-icons/bi";
import { FaMotorcycle } from "react-icons/fa";
import ModalFunction from "../ModalFunction";

function Header() {
  return (
    <Nav>
      <Bars />
      <NavLink to="/">홈</NavLink>
      <NavBtn>
        <NavBtnLink to="join">
          <FaMotorcycle />
        </NavBtnLink>
        <NavBtnLink to="login">
          <BiKey />
        </NavBtnLink>
        <NavBtnLink to="myPage">
          <GiFullMotorcycleHelmet />
        </NavBtnLink>
        <ModalFunction />
      </NavBtn>
    </Nav>
  );
}
export default Header;
