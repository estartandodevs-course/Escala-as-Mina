import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }
`;
export const theme = {
  sidebarColor: "#100928",
  primaryColor: "#75F099",
  activeButtonGradient: "linear-gradient(270deg, #1BE6D1 0%, #75F099 100%)",
  logoutColor: "#EB4783",
};
