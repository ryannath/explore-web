import { createTheme, ThemeProvider } from '@material-ui/core';
import Home from './pages/Home.js'

const defaultTheme = createTheme({
  overrides: {
    MuiContainer: {
      maxWidthLg:{
        paddingLeft: '10%',
        paddingRight: '10%',
      }
    }
  }
})


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
