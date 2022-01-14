import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Container, Typography } from '@mui/material'
import TextfieldWrapper from '../../components/FormUI/textfield/Textfields'
import Box from '@mui/material/Box'
// bouton select
import SelectWrapper from '../../components/FormUI/SelectWrapper/SelectWrapper'
import countries from '../../data/countries.json'
// bouton date
import DataTime from '../../components/FormUI/dateTimePicker/DataTime'
import Submit from '../../components/FormUI/Submit/Submit'
import Radios from '../../components/FormUI/Radio/Radio'
import Banner from '../../components/Banner/Banner'
import axios from 'axios'
import Login from '../Login/Login'
const Formulaire = () => {
  // state quand c'est submit
  const [formSubmit, setFormSubmit] = useState(false)

  // creation state formik pour inputs
  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
  }
  // verification input avec Yup
  const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('invalid email.').required('Required'),
    pseudo: Yup.string()
      .required('Required')
      .min(3, 'Username must be at lest 3 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    birthday: Yup.date().required('Required'),
    addressLine1: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
  })

  return (
    <>
      {formSubmit ? (
        <>
          <Login />
          <h4 className="">Enregistrement réusis</h4>
        </>
      ) : (
        <Grid container>
          <Banner />
          <Grid item xs={12}>
            <Container maxWidth="md">
              <div>
                <Formik
                  initialValues={{ ...INITIAL_FORM_STATE }}
                  validationSchema={FORM_VALIDATION}
                  // direction pour submit le form!
                  onSubmit={async (values) => {
                    const pseudo = values.pseudo
                    const firstname = values.lastName
                    const name = values.lastName
                    const email = values.email
                    const password = values.password
                    // fetch via axios
                    await axios({
                      method: 'post',
                      url: `${process.env.REACT_APP_API_URL}api/user/register`,
                      data: {
                        pseudo,
                        firstname,
                        name,
                        email,
                        password,
                      },
                    })
                      .then((res) => {
                        if (res.data.errors) {
                          // renvoyé les erreurs du back (à afficher dans une div)
                          console.log(res.data.errors.pseudo)
                          console.log(res.data.errors.email)
                          console.log(res.data.errors.password)
                        } else {
                          // rediriger si submit
                          console.log('submit')

                          window.location = '/login'
                          setFormSubmit(true)
                        }
                      })
                      .catch((err) => console.log(err))
                  }}
                >
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Box sx={{ mx: 1, mt: 4 }}>
                          <Typography>Create an account</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <TextfieldWrapper name="firstName" label="First Name" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextfieldWrapper name="lastName" label="Last Name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextfieldWrapper name="email" label="Email" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextfieldWrapper name="pseudo" label="User Name" />
                      </Grid>

                      <Grid item xs={6}>
                        <DataTime name="birthday" label="Your birthday" />
                      </Grid>

                      <Grid item xs={6}>
                        <TextfieldWrapper
                          name="password"
                          label="Password"
                          type="password"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextfieldWrapper
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ mx: 1 }}>
                          <Typography>Gender</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Radios />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ mx: 1 }}>
                          <Typography>Adress</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <TextfieldWrapper name="addressLine1" label="Address" />
                      </Grid>

                      <Grid item xs={6}>
                        <TextfieldWrapper name="city" label="City" />
                      </Grid>

                      <Grid item xs={6}>
                        <SelectWrapper
                          name="country"
                          label="Country"
                          options={countries}
                        />
                      </Grid>

                      <Grid item xs={12} sx={{ mb: 4 }}>
                        <Submit>Submit</Submit>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </div>
            </Container>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default Formulaire
