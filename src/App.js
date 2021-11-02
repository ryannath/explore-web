import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Home from './pages/Home.js'

const defaultTheme = createTheme({
  overrides: {
    MuiContainer: {
      maxWidthLg:{
        paddingLeft: '10%',
        paddingRight: '10%',
      }
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16
  }
})


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
