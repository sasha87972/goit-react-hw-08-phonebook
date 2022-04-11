import { useSelector } from "react-redux";
import Navigation from "../navigation";
import UserMenu from "../userMenu";
import AuthMenu from "../authMenu/authMenu";
import { authSelectors } from "../../redux/auth";
import { Header } from "./appBar.styled";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Header>
  );
}
