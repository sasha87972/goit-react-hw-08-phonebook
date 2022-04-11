import PropTypes from "prop-types";
import React from "react";
import { Button } from "./button.styled";

const StyledBtn = ({ title, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {title}
    </Button>
  );
};
Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
export default StyledBtn;
