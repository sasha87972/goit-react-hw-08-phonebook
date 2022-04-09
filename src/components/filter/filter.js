import React from "react";
import { Label, Input } from "./filter.styles";
import PropTypes from "prop-types";
import { filterContacts } from "../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { handleFilter } from "../../redux/actions";

const Filter = () => {
  const filter = useSelector(filterContacts);
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(handleFilter(e.target.value));
  return (
    <div>
      <Label htmlFor="filter">
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        ></Input>
      </Label>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
};
export default Filter;
