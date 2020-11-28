import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Rodadas, Jogadoras, Times, Ranking, Dashboard } from "./pages";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

export default App;
