import { TextField } from '@material-ui/core'
import React from 'react'
import { useField } from 'formik'

const DataTime = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name)

  const configDataTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  }

  if (meta && meta.touched && meta.error) {
    configDataTimePicker.error = true
    configDataTimePicker.helperText = meta.error
  }
  return <TextField {...configDataTimePicker} />
}

export default DataTime
