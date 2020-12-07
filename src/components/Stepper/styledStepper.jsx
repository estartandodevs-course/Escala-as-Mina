import styled from "styled-components";
import { getV } from "../../styles";

const Ball = styled.div`
  /* width: ${getV("64px", "h")};
  height: ${getV("64px", "h")}; */
  width: 64px;
  height: 64px;
  border-radius: 50%;
  opacity: ${(props) => props.opacity};
  background-image: ${(props) => props.theme.pallete.gradient.main};
  z-index: 2;
`;

const VerticalBar = styled.div`
  position: absolute;
  top: 100%;
  /* right: ${getV("33px", "w")}; */
  right: 25px;
  width: 2px;
  height: ${getV("40px", "h")};
  background-image: ${(props) => props.theme.pallete.gradient.main};
  z-index: 1;
  opacity: 0.5;
`;
export { Ball, VerticalBar };
