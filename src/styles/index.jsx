import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 10px;
  }
  #root {
    height: 100%;
  }
  body, html {
    height:100%;
  }
`;

const theme = {
  pallete: {
    primary: {
      lighter: "#D1FAF6",
      main: "#14B8A7",
      darker: "#052E2A",
    },
    secondary: {
      lighter: "#CEFDDC",
      main: "#75F099",
      darker: "#023110",
    },
    gray: {
      black: "#100928",
      firstGray: "#A0AEC0",
      secondGray: "#E2E8F0",
      thirdGray: "#5C5C5C",
      fourthGray: "#F1F5F9",
      white: "#FFFFFF",
    },
    alert: {
      lighter: "#FAD1E0",
      main: "#EB4783",
      darker: "#2E0514",
    },
    gradient: {
      main: "linear-gradient(270deg, #1BE6D1 0%, #75F099 100%)",
      hover: "linear-gradient(90deg, #0AC2AF 0%, #0DF250 100%)",
      alert: "linear-gradient(270deg, #EB4783 0%, #EB4747 100%)",
    },
  },

  dimensions: {
    button: {
      search: {
        width: "107px",
        height: "28px",
      },
      icon: {
        small: { width: "28px", height: "28px" },
        normal: { width: "44px", height: "44px" },
      },
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

    card: {
      small: {
        width: "327px",
        height: "231px",
      },
      normal: {
        width: "687px",
        height: "494px",
      },
      large: {
        width: "907px",
        height: "652px",
      },
      extraLarge: {
        width: "1124px",
        height: "819px",
      },
    },

    list: {
      ranking: {
        width: "1048px",
        height: "64px",
      },
      player: {
        width: "692px",
        height: "40px",
      },
      dashboard: {
        width: "639px",
        height: "32px",
      },
    },
  },
};

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

function getV(px, heightOrWidth) {
  if (px.includes("vw") || px.includes("vh")) return px;

  const measure = Number(px.replace("px", ""));
  let formattedMeasure = 0;
  if (["h", "height"].includes(heightOrWidth)) {
    const newMeasure = (measure / 1024) * 100;
    formattedMeasure = newMeasure + "vh";
  } else {
    const newMeasure = (measure / 1440) * 100;
    formattedMeasure = newMeasure + "vw";
  }
  return formattedMeasure;
}
export default variationStyle;
export { getV, variationStyle, theme, GlobalStyle };
