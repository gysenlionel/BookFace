import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useStateValue } from './../../components/StateProvider/StateProvider'
import { Avatar, IconButton } from '@material-ui/core'
import CardProfile from './profileessai'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Profile() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sx={{ margin: 2 }}
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
      </Grid>
      <Grid container spacing={3}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sx={{ margin: 2 }}
        ></Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  )
}
