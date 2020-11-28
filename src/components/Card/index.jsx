import { StyledCard } from './styledCard';

export const CardMin = (props) => {
  const { text } = props;

  return <StyledCard>{text}</StyledCard>;
};

export const CardMax = (props) => {
  const { text } = props;

  return (
    <StyledCard width="900px" height="652px">
      {text}
    </StyledCard>
  );
};
