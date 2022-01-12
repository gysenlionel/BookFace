import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useStateValue } from './../../components/StateProvider/StateProvider'
import { Avatar, IconButton } from '@material-ui/core'
import './../../styles/profilcss.css'
import TextField from '@mui/material/TextField'
import SelectWrapper from '../../components/FormUI/SelectWrapper/SelectWrapper'
import countries from '../../data/countries.json'
// bouton date
import DataTime from '../../components/FormUI/dateTimePicker/DataTime'
import { Formik, Form } from 'formik'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Profile() {
  const [{ user }, dispatch] = useStateValue()
  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    addressLine1: '',
    city: '',
    country: '',
  }
  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        // direction pour submit le form!
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
          >
            <Avatar
              src=""
              style={{
                margin: '10px',
                width: '150px',
                height: '150px',
              }}
            />
            <h1> Welcome: name</h1>
          </Grid>

          <Grid container spacing={2}>
            <Grid justifyContent="space-between" item xs={6}>
              <Box sx={{ ml: 5 }}>
                <h2>Edit Name : </h2>
              </Box>
              <Box
                sx={{ justifyContent: 'space-between' }}
                display="flex"
                sx={{ mx: 1, mt: 4 }}
              >
                <Grid sx={{ ml: 4, mr: 4 }} item xs={5}>
                  <TextField
                    style={{ width: '100%' }}
                    name="firstName"
                    label="First Name"
                    id="Firstname"
                  />
                </Grid>
                <Grid sx={{ ml: 4, mr: 4 }} item xs={5}>
                  <TextField
                    style={{ width: '100%' }}
                    name="LastName"
                    label="Last Name"
                    id="Last Name"
                  />
                </Grid>
                <Grid sx={{ ml: 4, mr: 4 }} item xs={2}>
                  <button className="saveBtn">save</button>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ ml: 5 }}>
                <h2>Edit Email : </h2>
              </Box>
              <Box
                sx={{ justifyContent: 'space-between' }}
                display="flex"
                sx={{ mx: 1, mt: 4 }}
              >
                <Grid sx={{ ml: 4, mr: 6 }} item xs={6}>
                  <TextField
                    style={{ width: '100%' }}
                    name="Email"
                    label="Email"
                    id="Email"
                  />
                </Grid>

                <Grid sx={{ ml: 4, mr: 4 }} item xs={2}>
                  <button className="saveBtn">save</button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              sx={{ mt: 3, ml: 5 }}
              justifyContent="space-between"
              item
              xs={10}
            >
              <Box>
                <h2>Edit Address : </h2>
              </Box>
              <TextField
                sx={{ mr: 5 }}
                style={{ width: '90%' }}
                name="addressLine1"
                label="Address"
              />
            </Grid>

            <Grid
              sx={{ mt: 1, ml: 5, mb: 4 }}
              display="flex"
              justifyContent="space-between"
              xs={12}
            >
              <Grid sx={{ ml: 2, mr: 5 }} item xs={5}>
                <TextField
                  style={{ width: '100%' }}
                  name="city"
                  label="City"
                  id="City"
                />
              </Grid>
              <Grid sx={{ ml: 4, mr: 6 }} item xs={5}>
                <SelectWrapper
                  fullWidth
                  name="country"
                  label="Country"
                  options={countries}
                />
              </Grid>
              <Grid sx={{ ml: 4, mr: 10 }} item xs={2}>
                <button className="saveBtn">save</button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  )
}
