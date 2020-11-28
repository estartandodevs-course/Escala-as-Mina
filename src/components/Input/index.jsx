import {
  StyledDiv,
  StyledInput,
  StyledInputSearch,
  StyledInputOptions,
  StyledButton,
} from './styledInput';
import LupaInput from '../../assets/icons/LupaInput.svg';
import AcceptBtn from '../../assets/icons/AcceptBtn.svg';
import DeclineBtn from '../../assets/icons/DeclineBtn.svg';

export const Input = (props) => {
  const { label, type, placeholder, disabled = 'false' } = props;
  return (
    <form>
      <label>{label}</label>
      <StyledInput type={type} placeholder={placeholder} disabled={disabled} />
    </form>
  );
};

export const InputSearch = (props) => {
  const { placeholder } = props;
  return (
    <StyledDiv>
      <img src={LupaInput} alt={'Lupa'} />
      <StyledInputSearch type={'text'} placeholder={placeholder} />
      <BText type="submit" value="Pesquisar" />
    </StyledDiv>
  );
};

export const InputPlayer = (props) => {
  return (
    <StyledInputOptions>
      <input
        className="numberPlayer"
        type="number"
        placeholder="Nº da jogadora"
      />
      <input
        className="namePlayer"
        type="text"
        placeholder="Nome da jogadora"
      />
      <div>
        <a href="/">
          <img src={AcceptBtn} alt="Accept"></img>
        </a>
        <a href="/">
          <img src={DeclineBtn} alt="Decline"></img>
        </a>
      </div>
    </StyledInputOptions>
  );
};

export const BText = (props) => {
  const { type, value } = props;
  return <StyledButton type={type} value={value} />;
};
