import React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import logoTrans from '../../assets/logo_transparent.png'
import '../../styles/Banner.css'
const Banner = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container
          maxWidth="md"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <img src={logoTrans} alt="logo" className="logo" />
        </Container>
      </Grid>
    </Grid>
  )
}

export default Banner
