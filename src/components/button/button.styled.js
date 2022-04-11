import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #add8e6;
  font-size: 20px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: 1px solid #191970;
  border-radius: 4px;
  :hover {
    opacity: 1;
  }
`;
export { Button };
