import { Wrapper, Title } from "./wrapper.styled";
import React from "react";
import PropTypes from "prop-types";

const StyledWrapper = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

StyledWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StyledWrapper;
