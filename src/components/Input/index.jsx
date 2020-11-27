import { StyledInput, StyledInputSearch, DivSearch } from './styledInput';

export const Input = (props) => {
  const { label, type, placeholder } = props;
  return (
    <form>
      <label>{label}</label>
      <StyledInput type={type} placeholder={placeholder} />
    </form>
  );
};

export const InputSearch = (props) => {
  const { src, alt, type, placeholder } = props;
  return (
    <DivSearch>
      <img src={src} alt={alt} />
      <StyledInputSearch type={type} placeholder={placeholder} />
    </DivSearch>
  );
};

export const BText = (props) => {
  const { type } = props;
  return <input type={type}></input>;
};
