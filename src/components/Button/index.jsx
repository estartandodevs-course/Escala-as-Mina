import { RectangularButton, IconButton, ScoutButton } from "./styledButton";
import { useTheme } from "styled-components";
import { variationStyle, getV } from "../../styles";

export const Button = (props) => {
  // props.type can be solid, outlined or icon
  // props.variation can be primary, secondary, disabled, search, active, alert, forward or reverse (the latter two are exclusive for type=icon) this determines component styling
  //props.size can be small, normal or large (consult styles/index.js for more info)

  const {
    width,
    height,
    onClick,
    variation,
    children,
    type = "solid",
    ...restProps
  } = props;
  let { size } = props;
  let dimensions = {};
  const theme = useTheme();

  //if we don't provide a keyword for size, there's some default configs
  if (!size) {
    if (variation === "search" || variation === "scout") {
      size = variation;
    } else if (type === "icon") {
      size = type;
    }
  }

  dimensions = { ...theme.dimensions.button[size] };
  const styling = {
    //Styling object that StyledButton receives
    ...dimensions,
    ...variationStyle[variation],
    variation,
  };

  //if we provide a non-keyword size or width/height, then the button gonna have it
  if (
    width ||
    height ||
    size.includes("vh") ||
    size.includes("px") ||
    size.includes("vw")
  ) {
    if (width) styling["width"] = width;
    if (height) styling["height"] = height;
    if (!width && !height) {
      styling["width"] = size;
      styling["height"] = size;
    }
  }

  if (type === "icon") {
    return (
      <IconButton
        onClick={onClick}
        styling={styling}
        rounded={props.rounded}
        {...restProps}
      >
        {children}
      </IconButton>
    );
  } else if (variation === "scout") {
    return (
      <ScoutButton
        onClick={onClick}
        width={getV("64px", "w")}
        height={getV("24px", "h")}
        styling={styling}
        type={type}
        {...restProps}
      >
        {children}
      </ScoutButton>
    );
  } else {
    return (
      <RectangularButton
        onClick={onClick}
        styling={styling}
        type={type}
        {...restProps}
      >
        {children}
      </RectangularButton>
    );
  }
};
