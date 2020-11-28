import styled from 'styled-components';

export const StyledInput = styled.input`
  margin: 20px;
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

export const DivSearch = styled.div`
  margin: 20px;
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
    outline: none;
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
  border-radius: none;
  padding-left: 26px;
  margin: 0px;

  margin- ::-webkit-inline-placeholder {
    color: #e2e8f0;
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
