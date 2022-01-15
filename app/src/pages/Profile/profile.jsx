import React, { useContext } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Avatar, IconButton } from '@material-ui/core'
import './../../styles/profilcss.css'
import TextField from '@mui/material/TextField'
import TextfieldWrapper from '../../components/FormUI/textfield/Textfields'
import countries from '../../data/countries.json'
import { Formik, Form } from 'formik'
import MenuAppBar from '../../components/Header/Navbar'
import { UidContext } from '../../components/AppContext/AppContext'
import { useSelector } from 'react-redux'
import Submit from '../../components/FormUI/Submit/Submit'
import axios from 'axios'
import * as Yup from 'yup'

export default function Profile() {
  const FORM_email = Yup.object().shape({
    email: Yup.string().email('invalid email.').required('Required'),
  })

  const FORM_adress = Yup.object().shape({
    addressLine1: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
  })

  // accès id user
  const uid = useContext(UidContext)
  // accès aux data user
  const userData = useSelector((state) => state.userReducer)

  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    pseudo: '',
    password: '',
    confirmPassword: '',
    birthday: '',
    addressLine1: '',
    city: '',
    country: '',
  }

  const FORM_one = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    LastName: Yup.string().required('Required'),
    pseudo: Yup.string()
      .required('Required')
      .min(3, 'Username must be at lest 3 characters'),
  })

  return (
    <>
      <MenuAppBar />

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
          src={userData.picture}
          style={{
            margin: '10px',
            width: '150px',
            height: '150px',
          }}
        />
        <h1> Welcome: {userData.pseudo}</h1>
      </Grid>

      {/*   PREMIERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR */}

      <div className="background">
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_one}
          onSubmit={async (values) => {
            const pseudo = values.pseudo
            await axios({
              method: 'put',
              url:
                `${process.env.REACT_APP_API_URL}api/user/updatePseudoUser/` +
                uid,
              data: {
                pseudo,
              },
            })
              .then((res) => {
                if (res.data.errors) {
                  // renvoyé les erreurs du back (à afficher dans une div)
                  console.log(res.data.errors.pseudo)
                } else {
                  // rediriger si submit
                  console.log('submit')
                  window.location = '/profil'
                }
              })
              .catch((err) => console.log(err))
          }}
        >
          <Form>
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
                  <Grid item xs={3}>
                    <TextfieldWrapper
                      style={{ width: '100%' }}
                      name="pseudo"
                      label="pseudo"
                      id="pseudo"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextfieldWrapper
                      style={{ width: '100%' }}
                      name="firstName"
                      label="firstName"
                      id="firstName"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextfieldWrapper
                      style={{ width: '100%' }}
                      name="LastName"
                      label="LastName"
                      id="LastName"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={1}>
                  <Submit className="saveBtn"> Save </Submit>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        {/* DEUXIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIEME */}
        <Grid alignItems="center" justifyContent="space-around" container>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_email}
            onSubmit={async (values) => {
              const email = values.email
              await axios({
                method: 'put',
                url:
                  `${process.env.REACT_APP_API_URL}api/user/updatePseudoUser/` +
                  uid,
                data: {
                  email,
                },
              })
                .then((res) => {
                  if (res.data.errors) {
                    // renvoyé les erreurs du back (à afficher dans une div)
                    console.log(res.data.errors.email)
                  } else {
                    // rediriger si submit
                    console.log('submit')
                    window.location = '/profil'
                  }
                })
                .catch((err) => console.log(err))
            }}
          >
            <Form>
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
                    <TextfieldWrapper
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
            </Form>
          </Formik>
        </Grid>

        {/*        TROISIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEME */}

        <Grid alignItems="center" justifyContent="space-around" container>
          {/*  <Formik
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
            <Form> */}
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

          <Grid alignItems="center" justifyContent="space-around" container>
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
                  {/*  <SelectWrapper
                    fullWidth
                    name="country"
                    label="Country"
                    options={countries}
                  /> */}
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <button className="saveBtn">save</button>
              </Grid>
            </Grid>
          </Grid>
          {/*    </Form>
          </Formik> */}
        </Grid>
      </div>
    </>
  )
}
