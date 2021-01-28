import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import * as P from "./pages";
import { Layout } from "./components";
import { useEffect, useState } from "react";
import { onAuthStateChange } from "./service/auth.service";
import "./config/auth.config";
import * as M from "./mocks";
import { roundContext } from "./context";

const lazyInitialize = () => {
  const key = `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`;
  const userData = JSON.parse(window.sessionStorage.getItem(key));
  if (userData) return { loggedIn: true };
  return { loggedIn: false };
};
function App() {
  const { currentRound } = M.getCurrentRound();
  const [shownRound, setShownRound] = useState(currentRound);

  const [user, setUser] = useState(lazyInitialize);
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
              <roundContext.Provider value={shownRound}>
                <Route path="/rodadas">
                  <Layout>
                    <P.Rodadas />
                  </Layout>
                </Route>

                <Route exact path="/">
                  <Layout>
                    <P.Dashboard
                      shownRound={shownRound}
                      setShownRound={setShownRound}
                    />
                  </Layout>
                </Route>

                <Route path="/times">
                  <Layout>
                    <P.Teams />
                  </Layout>
                </Route>

                <Route path="/ranking">
                  <Layout>
                    <P.Ranking />
                  </Layout>
                </Route>

                <Redirect to="/"></Redirect>
              </roundContext.Provider>
            </>
          ) : (
            <>
              <Route path="/login">
                <P.LoginLayout />
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
