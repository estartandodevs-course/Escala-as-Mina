import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
`;
export const theme = {
  primaryColor: "#100928",
  secondaryColor: "#75F099",
  tertiaryColor: "#14B8A7",
  alertColor: "#EB4783",
  activeGradient: "linear-gradient(270deg, #1BE6D1 0%, #75F099 100%)",
  positiveText: "#FFFFFF",
  negativeText: "#A0AEC0",
  disabled: "#E2E8F0",
};
