import styled from 'styled-components';

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

  margin- ::-webkit-inline-placeholder {
    color: ${(props) => props.theme.pallete.gray.secondGray};
  }
`;

export const StyledInputOptions = styled.div`
  width: 692px;
  height: 40px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.pallete.gray.black};
  border: 1px solid ${(props) => props.theme.pallete.secondary.main};
  display: flex;
  justify-self: center;
  align-items: center;

  input {
    height: 22px;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    background-color: ${(props) => props.theme.pallete.gray.secondGray};
    border-radius: 2px;
    outline: none;
    border: none;
    margin-left: 15px;
    background:  ${(props) => props.theme.pallete.gray.white};
    border: 1px solid ${(props) => props.theme.pallete.secondary.main};
    box-sizing: border-box;
    border-radius: 30px;

    &:focus {
      outline: none;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  div {
    margin-left: auto;
    margin-right: 15px;

    img {
      margin: 10px;
    }
  }
`;

export const StyledInputNumber = styled.input`
  width: 140px;
  text-align: center;
  -moz-appearance: textfield;
  appearance: textfield;
`;

export const StyledInputName = styled.input`
  width: 400px;
  padding-left: 20px;
`;
