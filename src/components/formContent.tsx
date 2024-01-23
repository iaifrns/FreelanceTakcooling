import { Icon } from "@iconify/react/dist/iconify.js"
import { Alert, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material"
import { Fragment, useState } from "react"
import { EmailJSResponseStatus, send } from 'emailjs-com';

enum ResponseStatus {
  SUCCEESS,
  NOTHING,
  FAILED
}

export const FormContent = () => {

  const [formState, setFormState] = useState<Record<string, string>>({})

  const [response, setResponse] = useState<ResponseStatus>(ResponseStatus.NOTHING)
  const [loading, setLoading] = useState(false);

  const changeHandler = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    setLoading(true)

    send('service_jl2td49', 'template_x75hzgn', formState, 'yN-gLhPTPxMXzApQb')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        setLoading(false)
        setResponse(ResponseStatus.SUCCEESS)
        e.target.reset()
      }, (error: EmailJSResponseStatus) => {
        setResponse(ResponseStatus.FAILED)
        setLoading(false)
        console.log(error.text);
      });
  };

  return (
    <Fragment>
      <form name="formContent" onSubmit={sendEmail}>
        {response == ResponseStatus.SUCCEESS && <Alert variant="filled" severity="success" onClose={() => { setResponse(ResponseStatus.NOTHING) }}>
          Email sended successfully.
        </Alert>
        }
        {response == ResponseStatus.FAILED && <Alert variant="filled" severity="error" onClose={() => { setResponse(ResponseStatus.NOTHING) }}>
          An error occured please try again.
        </Alert>
        }
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <input style={{ display: 'none' }} type="text" id="message" name="message" />
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              autoComplete="given-name"
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="user_email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="family-name"
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phone"
              name="phone"
              label="phone"
              type="text"
              onChange={changeHandler}
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="town"
              name="town"
              label="Town"
              onChange={changeHandler}
              type="text"
              fullWidth
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
            />
          </Grid>
          <Grid container justifyContent={'center'} mt={3} ml={3}>
            <Button variant="contained" type="submit" sx={{ bgcolor: '#02132b', p: 2, width: '100%' }}>
              {loading ? (
                <CircularProgress />
              ) : (
                <>
                  <Icon icon="ion:paper-plane" color="white" />
                  <Typography fontWeight={'bold'}>Send</Typography>
                </>
              )}

            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  )
}
