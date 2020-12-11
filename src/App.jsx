import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginLayout, Dashboard, Rodadas, Times, Ranking } from "./pages";
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

          <Route path="/rodadas">
            <Layout>
              <Rodadas />
            </Layout>
          </Route>

          <Route exact path="/">
            <Layout>
              <Dashboard />
            </Layout>
          </Route>

          <Route path="/times">
            <Layout>
              <Times />
            </Layout>
          </Route>

          <Route path="/ranking">
            <Layout>
              <Ranking />
            </Layout>
          </Route>

        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
