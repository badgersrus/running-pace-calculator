import React, { createContext, useReducer } from 'react';
import { Container, Box, CssBaseline } from "@material-ui/core";
import Copyright from './components/Copyright'
import CalculatorForm from './components/CalculatorForm';
import calculationReducer from './calculationReducer';
import UnitSpinner from './components/UnitSpinner';

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isTimeSet: false,
  distance: 0,
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

  return (
    <Container component="main" maxWidth="xs">
      <CalculationContext.Provider value={{ state, dispatch }}>
        <CssBaseline />
        <CalculatorForm />
        <Box mt={5}>
          <UnitSpinner />
        </Box>
        <Box mt={5}>
          <Copyright />
        </Box>
      </CalculationContext.Provider>
    </Container>
  );
}

export default App;
