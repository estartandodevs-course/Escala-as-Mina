import * as S from './styledCard';

//props.size can be small, normal or large | Default = Small

export const Card = (props) => {
  const { children, size = 'small', ...restProps } = props;

  return (
    <S.StyledCard size={size} {...restProps}>
      {children}
    </S.StyledCard>
  );
};
