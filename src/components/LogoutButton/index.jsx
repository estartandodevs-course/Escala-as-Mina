import { NavItem } from "../Sidebar/Navbar/NavItem";
import src from "../../../assets/icons/Exit.svg";
import { theme } from "../../../pallete";
import { ThemeProvider } from "styled-components";

//ISSO VAI QUEBRAR

theme.primaryColor = theme.logoutColor;

const logout = {
  text: "Sair",
  src: src,
};

export const LogoutButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <NavItem item={logout} />
    </ThemeProvider>
  );
};
