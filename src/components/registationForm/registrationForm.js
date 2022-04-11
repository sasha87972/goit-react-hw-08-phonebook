import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import StyledWrapper from "../wrapper/wrapper";
import StyledBtn from "../button/button";
import { Form, Input, Label } from "./registrationForm.styled";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <StyledWrapper title="Sign up">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <StyledBtn type="submit" title="Sign Up" />
      </Form>
    </StyledWrapper>
  );
};
RegistrationForm.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
export default RegistrationForm;
