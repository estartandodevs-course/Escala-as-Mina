import { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import { LoginLayout } from './pages/login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Dashboard, Rodadas, Times, Ranking } from "./pages";
import { Layout } from "./components";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/login">
            <LoginLayout />
          </Route>

          <Layout>
            <Route path="/rodadas">
              <Rodadas />
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
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
