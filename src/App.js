import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import Home from './pages/Home.js'

let defaultTheme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
  }
});
defaultTheme =  createTheme(defaultTheme, {
  overrides: {
    MuiContainer: {
      maxWidthLg:{
        paddingLeft: '10%',
        paddingRight: '10%',
      }
    },
    MuiTypography: {
      // body1: {
      //   [defaultTheme.breakpoints.down('md')]: {
      //     fontSize: '1rem',
      //   }
      // },
      h4: {
        paddingBottom: '1rem',
        fontFamily: "'Roboto', sans-serif"
      }
    },
  },

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
