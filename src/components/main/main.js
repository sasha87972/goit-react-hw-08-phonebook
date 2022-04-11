import React from "react";
import StyledWrapper from "../wrapper";
import { StyledLink, Box } from "./main.styled";

const Main = () => {
  return (
    <StyledWrapper title="Hello, to access your phonebook, please authorize:">
      <Box>
        <StyledLink to={"/register"}>Sign Up</StyledLink>
        {}
        <StyledLink to={"/login"}> Log In </StyledLink>
      </Box>
    </StyledWrapper>
  );
};

export default Main;
