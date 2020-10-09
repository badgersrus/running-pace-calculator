import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Copyright from './components/Copyright'
import CalculatorForm from './components/CalculatorForm';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <CalculatorForm />
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
