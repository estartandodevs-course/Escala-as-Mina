import { Title, Subtitle, Span, Paragraph } from './StyledFont';

export const Typography = (props) => {
  const { type, children, ...restProps  } = props;
  if (type === 'span') {
    return (
      <Span
      {...restProps}
      >
        {children}
      </Span>
    );
  } else if (type === 'h1') {
    return (
      <Title type={type} {...restProps}>
        {children}
      </Tittle>
    );
  } else (if type === 'h2' || type === 'h3') {
    return (
      <Subtitle type={type} {...restProps}>
      {children}
      </Subtitle>
    );
  else {
    return (
      <Paragraph
        {...restProps}
      >
        {children}
      </Paragraph>
    );
  }
};
