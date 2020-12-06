import styled from 'styled-components';

const AddPlayerBtn = styled.button`
  background-color: ${(props) => props.theme.pallete.secondary.main};
  color: ${(props) => props.theme.pallete.gray.black};
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  width: 980px;
  height: 40px;
  border-radius: 30px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const PlayerInfo = styled.div`
  display: flex;

  input {
    margin: 0 15px;
  }

  img {
    margin: 8px;
  }
`;
export { AddPlayerBtn, PlayerInfo };
