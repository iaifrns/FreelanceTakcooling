import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { Fragment, useRef, useState } from "react"
import { EmailJSResponseStatus, send } from 'emailjs-com';

export const FormContent = ({ isSmallScreen }: { isSmallScreen: boolean }) => {

  const form: any = useRef();

  const [formState, setFormState] = useState({})

  const changeHandler = (e : any) => {
    setFormState({...formState, [e.target.name] : e.target.value})
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    send('service_jl2td49', 'template_x75hzgn', formState, 'yN-gLhPTPxMXzApQb')
      .then((result : EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error : EmailJSResponseStatus) => {
        console.log(error.text);
      });
  };

  return (
    <Fragment>
      <form ref={form} onSubmit={sendEmail}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <input style={{display : 'none'}} type="text" id="message" name="message"/>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="user_email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="family-name"
              onChange={changeHandler}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="phone"
              type="text"
              onChange={changeHandler}
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="town"
              name="town"
              label="Town"
              onChange={changeHandler}
              type="text"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="message"
              type="text"
              label="How can we help you? Feel free to get in touch"
              fullWidth
              onChange={changeHandler}
              autoComplete="shipping address-line1"
              variant="standard"
              sx={{ pt: 5 }}
            />
          </Grid>
          <Grid container justifyContent={'right'} m={3}>
            <Button variant="contained" type="submit" sx={{ bgcolor: '#02132b', p: 2, width: isSmallScreen ? '100%' : "30%" }}>
              <Icon icon="ion:paper-plane" color="white" />
              <Typography fontWeight={'bold'}>Send</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  )
}
