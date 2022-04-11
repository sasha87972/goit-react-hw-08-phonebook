import React from "react";
import { MenuLink } from "./authMenu.styled";

export default function AuthMenu() {
  return (
    <div>
      <MenuLink to="/register">Sign Up</MenuLink>
      <MenuLink to="/login">Log In</MenuLink>
    </div>
  );
}
