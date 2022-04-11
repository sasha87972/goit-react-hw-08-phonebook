import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuLink = styled(NavLink)`
display: inline-block;
  font-size: 25px;
  text-decoration: none;
  margin-right: 30px;
  padding: 12px;
  &:last-child {
    margin-right: 0;
  }
  color: #191970;
  &.active {
    color: #3F00FF;
    }
  }
`;
export { MenuLink };
