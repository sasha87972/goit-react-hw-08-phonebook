import React from "react";
import { NavMenu, MenuLink } from "./navigation.styled";

const Navigation = () => (
  <NavMenu>
    <MenuLink to="/">Home</MenuLink>

    <MenuLink to="/contacts">Contacts</MenuLink>
  </NavMenu>
);

export default Navigation;
