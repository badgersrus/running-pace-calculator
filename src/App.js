import React, { createContext, useReducer } from 'react';
import { Container, Box, CssBaseline } from "@material-ui/core";
import Copyright from './components/Copyright'
import calculationReducer from './calculationReducer';
import ConversionSlider from './components/ConversionSlider';
import Calculator from './components/Calculator';
import Header from './components/Header';
import { createMuiTheme, withTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './styling/App.css'

const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif, "Staatliches", cursive',
    h1: {
      fontFamily: '"Staatliches", cursive',
      fontSize: "250px"
    },
    h4: {
      fontSize: "25px",
      marginTop: "5px"
    },
    useNextVariants: true
  },
  overrides: {
    MuiInputBase: {
        root: {
            borderRadius: 0,
            color: "white",
            fontSize: 20,
        },
        
    },
} 
});

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isTimeSet: false,
  distance: "",
  distanceUnits: "kilometers",
  isDistanceSet: false,
  paceMinutes: 0,
  paceSeconds: 0,
  paceUnits: "kilometers",
  isPaceSet: false
}

export const CalculationContext = createContext()

function App() {
  const [state, dispatch] = useReducer(calculationReducer, initialState)

  return (<>
    <ThemeProvider theme={THEME}>
      <div className="wrap">
      <Box p={8} />
        <Header />
        <Container component="main" maxWidth="sm">
          <CalculationContext.Provider value={{ state, dispatch }}>
            <CssBaseline />
            <Box p={6} />
            <Calculator />
            <Box p={3}>
              <ConversionSlider />
            </Box>
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
            <Box p={10} />
          </CalculationContext.Provider>
        </Container>
      </div>
    </ThemeProvider>
  </>
  );
}

export default App;
