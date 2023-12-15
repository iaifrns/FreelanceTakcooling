import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { Fragment } from "react"

export const FormContent = ({isSmallScreen} : {isSmallScreen : boolean}) => {
    return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="phone"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="subject"
            name="subject"
            label="Subject"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="How can we help you? Feel free to get in touch"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            sx={{pt:5}}
          />
        </Grid>
        <Grid container justifyContent={'right'} m={3}>
          <Button variant="contained" sx={{bgcolor : '#02132b', p: 2, width: isSmallScreen ? '100%' : "30%"}}>
            <Icon icon="ion:paper-plane"  color="white" />
            <Typography fontWeight={'bold'}>Send</Typography>
            </Button>
        </Grid>
      </Grid>
    </Fragment>
    )
}