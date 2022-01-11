import React from 'react'
import { Button } from '@material-ui/core'
import { useFormikContext } from 'formik'
import { cyan } from '@mui/material/colors'

const Submit = ({ children, ...otherProps }) => {
  const logoColor = cyan[200]
  // submit form du hook de fornik
  const { submitForm } = useFormikContext()

  const handleSubmit = () => {
    submitForm()
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  }

  return (
    <Button
      {...configButton}
      style={{ backgroundColor: '#42a5f5', color: '#FFFFFF' }}
    >
      {children}
    </Button>
  )
}

export default Submit
