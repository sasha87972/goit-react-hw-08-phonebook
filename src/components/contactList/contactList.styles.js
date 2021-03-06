import styled from "styled-components";

const List = styled.ul`
  font-size: 30px;
  margin: 0;
  padding: 15px;
`;
const ListItem = styled.li`
  display: flex;
  line-height: 20px;
  padding: 5px;
  width: 400px;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 100px;
  height: 35px;
  margin-left: auto;
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
export { List, ListItem, Button };
