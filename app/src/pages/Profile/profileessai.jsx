import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useStateValue } from './../../components/StateProvider/StateProvider'
import { Avatar, IconButton } from '@material-ui/core'
/* import './../../styles/profilcss.css' */
import TextField from '@mui/material/TextField'

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
        >
          <Box>
            <h2>Edit Name : </h2>
          </Box>
          <Box
            sx={{ justifyContent: 'space-between' }}
            display="flex"
            sx={{ mx: 1, mt: 4 }}
          >
            <Grid sx={{ ml: 4, mr: 4 }} item xs={6}>
              <TextField name="firstName" label="First Name" id="Firstname" />
            </Grid>
            <Grid sx={{ ml: 4, mr: 4 }} item xs={6}>
              <TextField name="LastName" label="Last Name" id="Last Name" />
            </Grid>
            <Grid sx={{ ml: 4, mr: 4 }} item xs={2}>
              <button className="saveBtn">save</button>
            </Grid>
          </Box>
          <Box sx={{ mx: 1, mt: 4 }}>
            <h2>Edit Email : </h2>
          </Box>
          <Box
            sx={{ justifyContent: 'space-between' }}
            display="flex"
            sx={{ mx: 1, mt: 2 }}
          >
            <Grid sx={{ ml: 4, mr: 4 }} item xs={12}>
              <TextField name="Email" label="Email" id="Email" />
            </Grid>

            <Grid sx={{ ml: 4, mr: 4 }} item xs={2}>
              <button className="saveBtn">save</button>
            </Grid>
          </Box>
        </Grid>
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
