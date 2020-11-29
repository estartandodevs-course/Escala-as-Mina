import { StyledCard } from './styledCard';

//props.size can be small, normal or large | Default = Small

export const Card = (props) => {
  const { children, size = 'small' } = props;

  return <StyledCard size={size}>{children}</StyledCard>;
};
