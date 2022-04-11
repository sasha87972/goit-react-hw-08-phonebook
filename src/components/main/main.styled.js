import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
font-size: 25px;
  text-decoration: none;
  color: #191970;
  margin-right: 30px;
  &:last-child {
      margin-right: 0;
  }
  &:hover {
    color: #3F00FF;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  padding: 5px;
  text-align: center;
`;
export { StyledLink, Box };
