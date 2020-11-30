import { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Dashboard, Rodadas, Jogadoras, Times, Ranking } from './pages';

function App() {
  return (
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
