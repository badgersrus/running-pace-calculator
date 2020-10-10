import React, { createContext, useReducer } from 'react';
import { Container, Box, CssBaseline } from "@material-ui/core";
import Copyright from './components/Copyright'
import CalculatorForm from './components/CalculatorForm';
import calculationReducer from './calculationReducer';

const initialState = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: 0,
      distanceUnits: "kilometers",
      paceMinutes: 0,
      paceSeconds: 0,
      paceUnits: "km"
  }

export const CalculationContext = createContext()

function App() {
  const [state, dispatch] = useReducer(calculationReducer, initialState)

  return (
    <Container component="main" maxWidth="xs">
      <CalculationContext.Provider value={{ state, dispatch }}>
        <CssBaseline />
        <CalculatorForm />
        <Box mt={8}>
          <Copyright />
        </Box>
      </CalculationContext.Provider>
    </Container>
  );
}

export default App;
