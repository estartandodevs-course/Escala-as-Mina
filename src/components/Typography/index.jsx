import { Span } from "./StyledText";

export const Typography = (props) => {
  const { type, children, ...restProps } = props;
  if (type === "span") {
    return <Span {...restProps}>{children}</Span>;
  }
};
