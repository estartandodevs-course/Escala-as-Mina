
import * as S from './styledCard';

//props.size can be small, normal or large | Default = Small

export const Card = (props) => {
  const { children, width, height, size = "small", ...restProps } = props;

  const styling = {
    width: theme.dimensions.card[size].width,
    height: theme.dimensions.card[size].height,
  };
  if (height) styling["height"] = height;
  if (width) styling["width"] = width;
  return (
    <S.StyledCard {...styling} {...restProps}>
      {children}
    </S.StyledCard>
  );
};
