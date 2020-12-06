import styled from "styled-components";
import { getV } from "../../styles";

const Ball = styled.div`
  width: ${getV("64px", "h")};
  height: ${getV("64px", "h")};
  border-radius: 50%;
  opacity: ${(props) => props.opacity};
  background-image: ${(props) => props.theme.pallete.gradient.main};
  z-index: 2;
`;

const VerticalBar = styled.div`
  position: absolute;
  top: ${getV("128px", "h")};
  right: ${getV("33px", "w")};
  width: 2px;
  height: ${(props) => props.height};
  background-image: ${(props) => props.theme.pallete.gradient.main};
  z-index: 1;
  opacity: 0.5;
`;
export { Ball, VerticalBar };
