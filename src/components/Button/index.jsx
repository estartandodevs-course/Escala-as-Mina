import { RectangularButton, IconButton } from "./styledButton";
import { useTheme } from "styled-components";

export const Button = (props) => {
  // props.type can be solid, outlined or icon
  // props.variation can be primary, secondary, disabled, search, active, alert, forward or reverse (the latter two are exclusive for type=icon) this determines component styling
  //props.size can be small, normal or large (consult styles/index.js for more info)

  const { onClick, variation, children, type = "solid" } = props;
  let { size } = props;
  if (variation === "search") size = variation;
  if (type === "icon") {
    size = type;
  }
  const theme = useTheme();
  const variationStyle = {
    //this can't be outside Button because it depends on theme
    primary: {
      background: theme.pallete.primary.main,
      hoverBackground: theme.pallete.primary.lighter,
    },
    secondary: {
      background: theme.pallete.secondary.main,
      hoverBackground: theme.pallete.secondary.main,
    },
    disabled: {
      background: theme.pallete.gray.firstGray,
      hoverBackground: theme.pallete.gray.secondGray,
    },
    search: {
      background: theme.pallete.gray.black,
      hoverBackground: theme.pallete.gray.firstGray,
    },
    active: {
      background: theme.pallete.gradient.main,
      hoverBackground: theme.pallete.gradient.hover,
    },
    alert: {
      background: theme.pallete.alert.main,
      hoverBackground: theme.pallete.gradient.alert,
    },
    forward: {
      background: theme.pallete.gradient.main,
    },
    reverse: {
      background: theme.pallete.gradient.hover,
    },
  };

  const styling = {
    //Styling object that StyledButton receives
    ...theme.dimensions.button[size],
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
