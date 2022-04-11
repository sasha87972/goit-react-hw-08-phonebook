import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import StyledWrapper from "../wrapper/wrapper";
import StyledBtn from "../button/button";
import { Form, Input, Label } from "./login.styled";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <StyledWrapper title="Log in">
      <Form onSubmit={handleSubmit} autoComplete="off">
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

        <StyledBtn title="Log In" type="submit" />
      </Form>
    </StyledWrapper>
  );
}

Login.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
