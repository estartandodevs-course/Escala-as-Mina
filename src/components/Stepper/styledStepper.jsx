import styled from "styled-components";
import { getV } from "../../styles";

const Ball = styled.div`
  height: ${getV("64px", "h")}; */
  width: ${getV("64px", "h")};
  height: ${getV("64px", "h")};
  border-radius: 50%;
  opacity: ${(props) => props.opacity};
  background-image: ${(props) => props.theme.pallete.gradient.main};
`;

const VerticalBar = styled.div`
  position: absolute;
  top: 100%;
  right: ${getV("28px", "h")};
  width: 2px;
  height: ${getV("40px", "h")};
  background-image: ${(props) => props.theme.pallete.gradient.main};
  opacity: 0.5;
`;
export { Ball, VerticalBar };
