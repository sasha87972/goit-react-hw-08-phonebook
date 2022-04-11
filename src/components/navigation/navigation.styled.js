import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavMenu = styled.nav`
  display: flex;
`;

const MenuLink = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  color: #191970;
  &.active {
    color: #3F00FF;
    }
  }
`;
export { NavMenu, MenuLink };
