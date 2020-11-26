import { Wrapper, stylingObject } from "./styledWrapper";

export const Sidebar = (props) => {
  const { variation = "left" } = props;
  const styling = stylingObject[variation];

  return <Wrapper styling={styling}>{props.children}</Wrapper>;
};
