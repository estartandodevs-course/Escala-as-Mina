import styled from 'styled-components';

export const StyledInput = styled.input`
  margin: 10px;
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
  margin: 10px;
  height: 44px;
  width: 1048px;
  background-color: #e2e8f0;
  border: 1px solid #a0aec0;
  box-sizing: border-box;
  border-radius: 30px;
  color: #100928;
  font-weight: 100;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding-left: 44px;

  ::-webkit-inline-placeholder {
    color: #a0aec0;
  }

  &:focus {
    outline: none;
    border: 1px solid #100928;
  }
`;

export const StyledInputSearch = styled.input`
  margin: 10px;
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

// export const StyledInputSearch = styled(StyledInput)`
//   background-color: #e2e8f0;
// `;
