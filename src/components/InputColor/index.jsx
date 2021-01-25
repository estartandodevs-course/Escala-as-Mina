import { useState, forwardRef, useRef } from "react";
import { StyledInput, Box, GradientLabel } from "./styledInput";

export const InputColor = forwardRef((props, ref) => {
  const [isClicked, setAlreadyUsed] = useState(false);
  const refFromInput = useRef();

  const { onChange, position } = props;

  const clickInput = () => {
    console.log("O  input foi clicado");
    if (!isClicked) {
      setAlreadyUsed(true);
    }
  };
  const handleChange = () => {
    const colorFromInput = refFromInput.current.value;
    ref.current[position] = colorFromInput;
  };

  return (
    <GradientLabel onPointerLeave={onChange} isClicked={isClicked}>
      {!isClicked && <Box> +</Box>}
      <StyledInput
        isClicked={isClicked}
        onClick={clickInput}
        ref={refFromInput}
        type="color"
        onChange={handleChange}
      />
    </GradientLabel>
  );
});
