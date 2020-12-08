import styled, { css } from "styled-components";
import { getV } from "../../styles";

const GridColumnWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${(props) => props.column};
`;
const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.36);
  backdrop-filter: blur(4px);
`;
const ModalHeader = styled.div`
  background-color: ${(props) => props.theme.pallete.gray.secondGray};
  width: 100%;
  height: ${getV("64px", "h")};
  border-radius: 15px 15px 0 0;
`;
const ModalList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: ${getV("519px", "h")};
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: ${getV("32px", "h")};

  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.pallete.gray.firstGray};
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
    background-image: ${(props) => props.theme.pallete.gradient.main};
    border-radius: 30px;
  }
`;
const ModalListItem = styled(GridColumnWrapper)`
  height: ${getV("64px", "h")};
  * {
    margin: auto;
  }
  &.active {
    background-color: ${(props) => props.theme.pallete.secondary.lighter};
  }
`;
const Form = styled.form`
  width: 100%;
`;
const ModalTag = styled.div`
  background-color: ${(props) => props.theme.pallete.secondary.lighter};
  color: ${(props) => props.theme.pallete.primary.main};
  text-align: center;
  border-radius: 30px;
  width: ${getV("164px", "w")};
  padding: ${getV("4px", "h")} 0;

  ${(props) =>
    props.current &&
    css`
  background-color ${(props) => props.theme.pallete.gray.fourthGray};
  color: ${(props) => props.theme.pallete.gray.black}`}
`;

const Input = styled.input`
  display: none;
  &:checked ~ label div {
    background-image: ${(props) => props.theme.pallete.gradient.main};
    border: none;
    z-index: 1;
  }
  &:checked ~ label div img {
    display: block !important;
    z-index: 2;
    margin-top: auto;
    margin-bottom: auto;
  }
`;
const Label = styled.label`
  div {
    width: 20px;
    height: 20px;
    border: 1px solid ${(props) => props.theme.pallete.gray.firstGray};
    border-radius: 50%;
  }
  div:hover {
    cursor: pointer;
  }
`;
const Img = styled.img`
  display: none;
`;
const FlexContainer = styled.div`
  position: ${(props) => props.position};
  display: flex;
  justify-content: ${(props) => props.justify || "space-evenly"};
  align-items: center;
  width: ${(props) => (props.width ? getV(props.width, "w") : "100%")};
  height: ${(props) => props.height && "100%"};
  margin-left: ${(props) => props.marginLeft && "auto"};
  margin-right: ${(props) => props.marginRight && "auto"};
  margin-bottom: ${(props) =>
    props.marginBottom ? getV(props.marginBottom, "h") : ""};
  flex-direction: ${(props) => props.direction || "row"};
  padding: ${(props) => props.padding};
`;
export {
  FlexContainer,
  GridColumnWrapper,
  ModalWrapper,
  ModalHeader,
  ModalList,
  ModalListItem,
  Form,
  ModalTag,
  Input,
  Label,
  Img,
};
