import { Paragraph, Span } from "./styledText";

export const Typography = (props) => {
  const { type, children, ...restProps } = props;

  if (type === "span") {
    return <Span {...restProps}>{children}</Span>;
  } else {
    return <Paragraph {...restProps}>{children}</Paragraph>;
  }
};
