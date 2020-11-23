import { Sidebar } from './components/Sidebar';
import { ThemeProvider } from 'styled-components'; //https://www.npmjs.com/package/react-theme-provider
import { theme } from './pallete';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
