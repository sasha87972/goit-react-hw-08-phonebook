import React from "react";
import { Label, Input, Wrapper } from "./filter.styles";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label htmlFor="filter">
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
        ></Input>
      </Label>
    </Wrapper>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
};
export default Filter;
