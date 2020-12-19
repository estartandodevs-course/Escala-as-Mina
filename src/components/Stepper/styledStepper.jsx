import styled from "styled-components";
import { getV } from "../../styles";

const Ball = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: ${(props) => props.opacity};
  background-image: ${(props) => props.theme.pallete.gradient.main};
`;

const VerticalBar = styled.div`
  position: absolute;
  top: 100%;
  right: 18px;
  width: 2px;
  height: ${getV("40px", "h")};
  background-image: ${(props) => props.theme.pallete.gradient.main};
  opacity: 0.5;
`;
export { Ball, VerticalBar };
