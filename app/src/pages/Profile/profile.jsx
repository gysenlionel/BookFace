import React, { useContext } from 'react'
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
import MenuAppBar from '../../components/Header/Navbar'
import { UidContext } from '../../components/AppContext/AppContext'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Profile() {
  // accès id user
  const uid = useContext(UidContext)
  /*  const [{ user }, dispatch] = useStateValue() */
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
      <MenuAppBar />
      {uid ? (
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          // direction pour submit le form!
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form>
            <Grid
              className="profil"
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
            <div className="background">
              <Grid alignItems="center" justifyContent="space-around" container>
                <Grid
                  justifyContent="space-between"
                  alignItems="center"
                  direction="column"
                  sx={{ mt: 3, mb: 2 }}
                  item
                  xs={10}
                >
                  <Box>
                    <h2>Edit Name : </h2>
                  </Box>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    xs={12}
                  >
                    <Grid item xs={5}>
                      <TextField
                        style={{ width: '100%' }}
                        name="city"
                        label="City"
                        id="City"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <SelectWrapper
                        fullWidth
                        name="country"
                        label="Country"
                        options={countries}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={1}>
                    <button className="saveBtn">save</button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid alignItems="center" justifyContent="space-around" container>
                <Grid
                  justifyContent="space-between"
                  alignItems="center"
                  direction="column"
                  sx={{ mt: 3, mb: 2 }}
                  item
                  xs={10}
                >
                  <Box>
                    <h2>Edit Mail: </h2>
                  </Box>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    xs={12}
                  >
                    <Grid item xs={12}>
                      <TextField
                        style={{ width: '100%' }}
                        name="Email"
                        label="Email"
                        id="Email"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={1}>
                    <button className="saveBtn">save</button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid alignItems="center" justifyContent="space-around" container>
                <Grid
                  justifyContent="space-between"
                  alignItems="center"
                  direction="column"
                  sx={{ mt: 3, mb: 2 }}
                  item
                  xs={10}
                >
                  <Box>
                    <h2>Edit Address : </h2>
                  </Box>
                  <TextField
                    style={{ width: '100%' }}
                    name="addressLine1"
                    label="Address"
                  />
                </Grid>

                <Grid
                  alignItems="center"
                  justifyContent="space-around"
                  container
                >
                  <Grid
                    justifyContent="space-between"
                    alignItems="center"
                    direction="column"
                    sx={{ mb: 2 }}
                    item
                    xs={10}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      xs={12}
                    >
                      <Grid item xs={5}>
                        <TextField
                          style={{ width: '100%' }}
                          name="FirstName"
                          label="FirstName"
                          id="FirstName"
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          style={{ width: '100%' }}
                          name="LastName"
                          label="LastName"
                          id="LastName"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={1}>
                      <button className="saveBtn">save</button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Form>
        </Formik>
      ) : (
        <p>connectez-vous</p>
      )}
    </>
  )
}
