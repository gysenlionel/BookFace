import React from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'

const Testform = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
        />
        <TextField id="demo-helper-text-misaligned-no-helper" label="Name" />
      </Box>
    </div>
  )
}

export default Testform
