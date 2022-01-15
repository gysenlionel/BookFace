import React, { useContext } from 'react'

import Box from '@mui/material/Box'
import SelectWrapper from '../../components/FormUI/SelectWrapper/SelectWrapper'
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
import { useForm } from 'react-hook-form'
import Uploadpictures from './uploadpictures'

export default function Profile() {
  const FORM_one = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    pseudo: Yup.string()
      .required('Required')
      .min(3, 'Username must be at lest 3 characters'),
  })

  const FORM_adress = Yup.object().shape({
    addressLine1: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
  })

  // accès id user
  const uid = useContext(UidContext)
  console.log(uid)
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
    pictures: '',
  }

  return (
    <>
      <MenuAppBar />

      <Grid
        className="profil"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
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
            const firstname = values.firstName
            const name = values.lastName
            await axios({
              method: 'put',
              url:
                `${process.env.REACT_APP_API_URL}api/user/updatePseudoUser/` +
                uid,
              data: {
                pseudo,
                firstname,
                name,
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
                  <Grid xs={3}>
                    <TextfieldWrapper
                      style={{ width: '100%' }}
                      name="pseudo"
                      label={userData.pseudo}
                      id="pseudo"
                    />
                  </Grid>
                  <Grid xs={3}>
                    <TextfieldWrapper
                      style={{ width: '100%' }}
                      name="firstName"
                      label={userData.firstname}
                      id="firstName"
                    />
                  </Grid>
                  <Grid xs={3}>
                    <TextfieldWrapper
                      style={{ width: '100%' }}
                      name="lastName"
                      label={userData.name}
                      id="lastName"
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ mt: 3, mb: 2 }} xs={1}>
                  <Submit className="saveBtn"> Save </Submit>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        {/* DEUXIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIEME */}

        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_adress}
          // direction pour submit le form!
          onSubmit={async (values) => {
            const address = values.addressLine1
            const country = values.country
            const city = values.city
            // fetch via axios
            await axios({
              method: 'put',
              url:
                `${process.env.REACT_APP_API_URL}api/user/updateLocationUser/` +
                uid,
              data: {
                address,
                country,
                city,
              },
            })
              .then((res) => {
                if (res.data.errors) {
                  // renvoyé les erreurs du back (à afficher dans une div)
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
              alignItems="center"
              justifyContent="space-around"
              container
              xs={12}
            >
              <Grid
                justifyContent="space-between"
                alignItems="center"
                direction="column"
                sx={{ mt: 3, mb: 2 }}
                xs={10}
              >
                <Box>
                  <h2>Edit Address : </h2>
                </Box>
                <TextfieldWrapper
                  style={{ width: '100%' }}
                  name="addressLine1"
                  label={userData.address}
                />
              </Grid>

              <Grid alignItems="center" justifyContent="space-around" container>
                <Grid
                  justifyContent="space-between"
                  alignItems="center"
                  direction="column"
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
                    <Grid xs={5}>
                      <TextfieldWrapper
                        style={{ width: '100%' }}
                        name="city"
                        label={userData.city}
                        id="city"
                      />
                    </Grid>
                    <Grid xs={5}>
                      <SelectWrapper
                        style={{ width: '100%' }}
                        name="country"
                        label="country"
                        options={countries}
                      />
                    </Grid>
                  </Grid>
                  <Grid sx={{ mt: 3, mb: 2 }} xs={1}>
                    <Submit className="saveBtn"> Save </Submit>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        {/*  TROISIEME PICTUUUUUUUUUUUUUUUUUUUUUURE */}

        <Grid alignItems="center" justifyContent="space-around" container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            xs={10}
            sx={{ mt: 3, mb: 2 }}
          >
            <h2>Edit Pictures : </h2>
            <Uploadpictures />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
