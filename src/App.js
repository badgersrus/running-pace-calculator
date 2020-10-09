import React from 'react';
import { Container, Box, MuiThemeProvider, CssBaseline } from "@material-ui/core";
import Copyright from './components/Copyright'
import CalculatorForm from './components/CalculatorForm';
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <CalculatorForm />
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
     </MuiThemeProvider>
  );
}

export default App;
