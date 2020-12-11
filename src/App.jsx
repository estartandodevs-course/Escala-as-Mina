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
import firebase from "firebase/app";
import "firebase/auth";

const credentials = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
firebase.initializeApp(credentials);

function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true });
    } else {
      callback({ loggedIn: false });
    }
  });
}

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
