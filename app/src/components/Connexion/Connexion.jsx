import React from 'react'
import TextfieldWrapper from '../FormUI/textfield/Textfields'
import { Grid, Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Submit from '../../components/FormUI/Submit/Submit'
import Banner from '../../components/Banner/Banner'
import axios from 'axios'
import { palette } from '@mui/system'

const Connexion = () => {
  const errormail = document.querySelector('.erroremail')
  const errorPassword = document.querySelector('.errorpassword')
  const INITIAL_FORM_STATE = {
    email: '',
    password: '',
  }

  const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email('invalid email.').required('Required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })
  return (
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
                const email = values.email
                const password = values.password
                // fetch via axios
                await axios({
                  method: 'post',
                  url: `${process.env.REACT_APP_API_URL}api/user/login`,
                  withCredentials: true,
                  data: {
                    email,
                    password,
                  },
                })
                  .then((res) => {
                    if (res.data.errors) {
                      // renvoyé les erreurs du back (à afficher dans une div)

                      errormail.innerHTML = res.data.errors.email
                      errorPassword.innerHTML = res.data.errors.password
                      console.log(res.data.errors.password)
                    } else {
                      console.log(res)
                      // rediriger si submit

                      window.location = '/'
                    }
                  })
                  .catch((err) => console.log(err))
              }}
            >
              <Form>
                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                  <Grid item xs={8}>
                    <TextfieldWrapper name="email" label="Email" />
                    <div className="erroremail"></div>
                  </Grid>
                  <Grid item xs={8}>
                    <TextfieldWrapper
                      name="password"
                      label="Password"
                      type="password"
                    />
                    <div className="errorpassword"></div>
                  </Grid>
                  <Grid item xs={8} sx={{ mb: 4 }}>
                    <Submit>Submit</Submit>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
}

export default Connexion
