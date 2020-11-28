import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Rodadas, Jogadoras, Times, Ranking, Dashboard } from "./pages";
import { Sidebar } from "./components/Sidebar";
import { layoutSidebar } from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <layoutSidebar></layoutSidebar>
    </ThemeProvider>
  );
}

export default App;
