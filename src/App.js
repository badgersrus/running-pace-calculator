import React, { createContext, useReducer } from 'react';
import { Container, Box, CssBaseline } from "@material-ui/core";
import Copyright from './components/Copyright'
import calculationReducer from './calculationReducer';
import UnitSpinner from './components/UnitSpinner';
import Calculator from './components/Calculator';
import Header from './components/Header';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif, "Staatliches", cursive',
    h1: {
      fontFamily: '"Staatliches", cursive'
    },
    useNextVariants: true
  }
  // typography: {
  //   fontFamily: [
  //     '"Montserrat"',
  //     'sans-serif'
  //   ].join(','),
  // }
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
      <Header />
      <Container component="main" maxWidth="xs">
        <CalculationContext.Provider value={{ state, dispatch }}>
          <CssBaseline />
          <Calculator />
          <Box mt={5}>
            <UnitSpinner />
          </Box>
          <Box mt={5}>
            <Copyright />
          </Box>
        </CalculationContext.Provider>
      </Container>
    </ThemeProvider>
  </>
  );
}

export default App;
