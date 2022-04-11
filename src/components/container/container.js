import React from "react";
import PropTypes from "prop-types";
import Box from "./container.styles";

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
