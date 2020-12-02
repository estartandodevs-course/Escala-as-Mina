import { Tittle, Span, Paragraph } from './StyledFont';

export const Typography = (props) => {
  const { type, color, align, gradient, children, size, weight, font } = props;
  if (type === 'span') {
    return (
      <Span
        color={color}
        align={align}
        gradient={gradient}
        size={size}
        weight={weight}
        font={font}
      >
        {children}
      </Span>
    );
  } else if (type === 'h1' || type === 'h2' || type === 'h3') {
    return (
      <Tittle type={type} color={color} align={align} size={size}>
        {children}
      </Tittle>
    );
  } else {
    return (
      <Paragraph
        color={color}
        align={align}
        gradient={gradient}
        size={size}
        weight={weight}
        font={font}
      >
        {children}
      </Paragraph>
    );
  }
};
