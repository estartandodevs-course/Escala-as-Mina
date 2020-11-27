import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
  }
  :root {
    font-size: 10px;
  }
`;

export const theme = {
  pallete: {
    primary: {
      first: "#100928",
      second: "#75F099",
    },
    secondary: {
      first: "#14B8A7",
      second: "#D1FAF6",
    },
    disabled: {
      first: "#8E8E8E",
      second: "#BFBFBF",
    },
    alert: {
      first: "#EB4783",
    },
    gradient: {
      first: "linear-gradient(270deg, #1BE6D1 0%, #75F099 100%)",
      second: "linear-gradient(90deg, #0AC2AF 0%, #0DF250 100%)",
    },
  },

  dimensions: {
    button: {
      small: {
        width: "165px",
        height: "32px",
      },
      normal: {
        width: "186px",
        height: "44px",
      },
      large: {
        width: "1000px",
        height: "32px",
      },
    },
  },
};
