import { useState } from "react";
import { StyledInput, Box, GradientLabel } from "./styledInput";

export const InputColor = (props) => {
  const [color, setColor] = useState("");

  const { onChange, position } = props;
  return (
    <GradientLabel color={color}>
      <Box color={color}>+</Box>
      <StyledInput
        type="color"
        onChange={(event) => {
          onChange(position, event.target.value);
          setColor(event.target.value);
        }}
      />
    </GradientLabel>
  );
};
