import React from 'react'
import Button from '@mui/material/Button'
import { purple } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
})

function Buttony() {
  return (
    <div>
      {' '}
      <ThemeProvider theme={theme}>
        <Button variant="contained"> click here </Button>
      </ThemeProvider>
    </div>
  )
}

export default Buttony
