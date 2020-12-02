import styled from "styled-components";

export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 24px;
  color: ${(props) => props.theme.pallete.secondary.lighter};
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${(props) => props.theme.pallete.gray.black};
  font-weight: 500;
  line-height: 19px;
  padding-left: 16px;
  height: 48px;
  border: 2px solid ${(props) => props.theme.pallete.gray.firstGray};
  border-radius: 10px;

  ::-webkit-inline-placeholder {
    color: ${(props) => props.theme.pallete.gray.secondGray};
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.pallete.secondary.main};
  }
`;

export const StyledDiv = styled.div`
  width: 1000px;
  height: 44px;
  background-color: ${(props) => props.theme.pallete.gray.secondGray};
  border: 1px solid ${(props) => props.theme.pallete.gray.firstGray};
  box-sizing: border-box;
  border-radius: 30px;
  color: ${(props) => props.theme.pallete.gray.black};
  font-weight: 100;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 24px;

  ::-webkit-inline-placeholder {
    color: ${(props) => props.theme.pallete.gray.firstGray};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.pallete.gray.black};
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 30px;
  }
`;

export const StyledInputSearch = styled.input`
  outline: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-weight: 100;
  font-size: 24px;
  line-height: 28px;
  border: none;
  padding-left: 26px;
  margin: 0px;

  ::-webkit-inline-placeholder {
    color: ${(props) => props.theme.pallete.gray.secondGray};
  }
`;

export const StyledInputPlayer = styled.input`
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.pallete.gray.white};
  border: 1px solid ${(props) => props.theme.pallete.secondary.main};
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.5);
  outline: none;
  padding-left: 30px;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
