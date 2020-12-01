import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Rodadas, Jogadoras, Times, Ranking, Dashboard } from "./pages";
import { Sidebar } from "./components/Sidebar";
import { Layout, NavItem } from "./components/Layout";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/rodadas">
            <Rodadas />
          </Route>

          <Route path="/jogadoras">
            <Jogadoras />
          </Route>

          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route path="/times">
            <Times />
          </Route>

          <Route path="/ranking">
            <Ranking />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;