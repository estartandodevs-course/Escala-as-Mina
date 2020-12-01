import { Paragraph, Span } from "./styledText";

export const Typography = (props) => {
  const { type, color, align, gradient, children, size, weight, font } = props;

  if (type === "span") {
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
