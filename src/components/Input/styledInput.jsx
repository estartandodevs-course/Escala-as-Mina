import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #100928;
  font-weight: 500;
  line-height: 19px;
  padding-left: 16px;
  height: 48px;
  border: 2px solid #a0aec0;
  border-radius: 10px;

  ::-webkit-inline-placeholder {
    color: #e2e8f0;
  }

  &:focus {
    outline: none;
    border: 2px solid #75f099;
  }
`;

export const StyledDiv = styled.div`
  width: 1000px;
  background-color: #e2e8f0;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-radius: 30px;
  color: #100928;
  font-weight: 100;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;

  ::-webkit-inline-placeholder {
    color: #a0aec0;
  }

  &:focus {
    border: 1px solid #100928;
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
    color: #e2e8f0;
  }
`;

export const StyledInputOptions = styled.div`
  width: 692px;
  height: 40px;
  border-radius: 30px;
  background-color: #100928;
  border: 1px solid #75f099;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-around;

  input {
    height: 22px;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    background-color: #e2e8f0;
    border-radius: 2px;
    outline: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  input.numberPlayer {
    width: 88px;
    -moz-appearance: textfield;
    appearance: textfield;
    padding-left: 2px;
  }

  input.namePlayer {
    width: 356px;
    padding-left: 12px;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  img {
    margin: 10px;
  }
`;

export const StyledButton = styled.input.attrs({ type: 'submit' })`
  width: 107px;
  height: 28px;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  text-align: center;
  background: #100928;
  border-radius: 30px;
  color: rgba(27, 230, 209, 1);
  margin-right: 24px;
`;

// export const StyledInputSearch = styled(StyledInput)`
//   background-color: #e2e8f0;
// `;
