import { Oval } from "react-loader-spinner";
import { Wrapper } from "./loader.styled";
import PropTypes from "prop-types";

const Loader = () => {
  return (
    <Wrapper>
      {" "}
      <Oval color="#00BFFF" height={120} width={120} />
    </Wrapper>
  );
};
Loader.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};
export default Loader;
