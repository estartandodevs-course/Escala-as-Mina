import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Rodadas, Jogadoras, Times, Ranking } from "./pages";
import { Sidebar, Button } from "./components";

function mock() {
  console.log("mockckckck");
}

const Wrapper = styled.div`
  position: relative;
  left: 20vw;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar variation="left"></Sidebar>
      <Sidebar variation="right" />
      <Wrapper>
        <Button active oncClick={mock} size="small" variation="secondary">
          oi
        </Button>
        <Button active oncClick={mock} size="normal" variation="primary">
          primary
        </Button>
        <Button active oncClick={mock} size="large" variation="disabled">
          disabled
        </Button>
      </Wrapper>

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
            {/* <Dashboard /> */}
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
