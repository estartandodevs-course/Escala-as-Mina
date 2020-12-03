import { RectangularButton, IconButton } from "./styledButton";
import { useTheme } from "styled-components";
import { variationStyle } from "../../styles";

export const Button = (props) => {
  // props.type can be solid, outlined or icon
  // props.variation can be primary, secondary, disabled, search, active, alert, forward or reverse (the latter two are exclusive for type=icon) this determines component styling
  //props.size can be small, normal or large (consult styles/index.js for more info)

  const { onClick, variation, children, type = "solid" } = props;
  let { size } = props;
  let dimensions = {};
  const theme = useTheme();

  //if we don't provide a keyword for size, there's some default configs
  if (!size) {
    if (variation === "search") {
      size = variation;
    } else if (type === "icon") {
      size = type;
    }
  }

  //if we provide a non-keyword size, then the button gonna have this size (width = height)
  if (size.includes("vh") || size.includes("px") || size.includes("vw")) {
    dimensions = {
      width: size,
      height: size,
    };
  } else {
    dimensions = { ...theme.dimensions.button[size] };
  }

  const styling = {
    //Styling object that StyledButton receives
    ...dimensions,
    ...variationStyle[variation],
    variation,
  };

  if (type === "icon") {
    return (
      <IconButton onClick={onClick} styling={styling} rounded={props.rounded}>
        {children}
      </IconButton>
    );
  } else {
    return (
      <RectangularButton onClick={onClick} styling={styling} type={type}>
        {children}
      </RectangularButton>
    );
  }
};
