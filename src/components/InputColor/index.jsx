import { useState, forwardRef, useRef } from "react";
import { StyledInput, Box, GradientLabel } from "./styledInput";

export const InputColor = forwardRef((props, ref) => {
  const { onChange, position } = props;

  const hasColor = useRef(false);
  const refFromInput = useRef();

  const handleChange = () => {
    const colorFromInput = refFromInput.current.value;
    ref.current[position] = colorFromInput;
  };

  return (
    <GradientLabel onPointerLeave={onChange} color={hasColor}>
      <Box color={hasColor}>+</Box>
      <StyledInput ref={refFromInput} type="color" onChange={handleChange} />
    </GradientLabel>
  );
});
