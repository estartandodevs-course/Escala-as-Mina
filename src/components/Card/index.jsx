import { StyledCard } from './styledCard';

//props.size can be small or large

export const Card = (props) => {
  const { children, size } = props;

  return <StyledCard size={size}>{children}</StyledCard>;
};
