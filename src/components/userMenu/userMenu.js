import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import StyledBtn from "../button";
import { Wrapper, Span } from "./userMenu.styled";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <Wrapper>
      <Span>{email}</Span>
      <StyledBtn
        title="Log Out"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      />
    </Wrapper>
  );
}
