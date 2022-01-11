import React from 'react'
import { Field } from 'formik'
import Box from '@mui/material/Box'
const Radios = () => {
  const commonStyles = {
    bgcolor: 'background.grey',
    mx: 1,
    border: 1,
    width: '33%',
    height: '3rem',
  }

  return (
    <Field component="div" name="gender">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            ...commonStyles,
            borderColor: 'grey.500',
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input
            type="radio"
            id="radioOne"
            defaultChecked
            name="gender"
            value="male"
          />
          <label htmlFor="gender">Male</label>
        </Box>
        <Box
          sx={{
            ...commonStyles,
            borderColor: 'grey.500',
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input type="radio" id="radioTwo" name="gender" value="female" />
          <label htmlFor="gender">Female</label>
        </Box>
        <Box
          sx={{
            ...commonStyles,
            borderColor: 'grey.500',
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input type="radio" id="radioThree" name="gender" value="other" />
          <label htmlFor="gender">other</label>
        </Box>
      </Box>
    </Field>
  )
}

export default Radios
