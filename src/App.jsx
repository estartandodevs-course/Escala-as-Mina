import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginLayout, Dashboard, Rodadas, Times, Ranking } from "./pages";
import { Layout } from "./components";
import { useEffect, useState } from "react";
import { onAuthStateChange } from "./service/auth.service";
import "./config/auth.config";

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          {user.loggedIn ? (
            <>
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

              <Redirect to="/"></Redirect>
            </>
          ) : (
              <>
                <Route path="/login">
                  <LoginLayout />
                </Route>
                <Redirect to="/login"></Redirect>
              </>
            )}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
