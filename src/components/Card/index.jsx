import { StyledCard } from "./styledCard";

//props.size can be small, normal or large | Default = Small

export const Card = (props) => {
  const { children, size = "small", ...restProps } = props;

  return (
    <StyledCard size={size} {...restProps}>
      {children}
    </StyledCard>
  );
};
