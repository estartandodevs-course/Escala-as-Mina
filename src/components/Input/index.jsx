import { StyledInput, StyledInputSearch, StyledButton } from './styledInput';

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
  const { type, placeholder } = props;
  return <StyledInputSearch type={type} placeholder={placeholder} />;
};

export const BText = (props) => {
  const { type, value } = props;
  return <StyledButton type={type} value={value} />;
};
