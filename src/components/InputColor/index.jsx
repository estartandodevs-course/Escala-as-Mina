import { useState, forwardRef, useRef } from "react";
import { StyledInput, Box, GradientLabel } from "./styledInput";

export const InputColor = forwardRef((props, ref) => {
  const [color, setColor] = useState("");
  const refFromInput = useRef();

  const { onChange, position } = props;

  const handleChange = () => {
    const colorFromInput = refFromInput.current.value;
    ref.current[position] = colorFromInput;
    setColor(colorFromInput);
  };

  return (
    <GradientLabel onPointerLeave={onChange} color={color}>
      <Box color={color}>+</Box>
      <StyledInput ref={refFromInput} type="color" onChange={handleChange} />
    </GradientLabel>
  );
});
