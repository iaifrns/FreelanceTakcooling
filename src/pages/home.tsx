import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hearder from '../components/header';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Footer from '../components/footer';
import Section5 from '../components/Section5';
import { Grid } from '@mui/material';
import { useEffect } from 'react';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HomePage() {

  useEffect(()=>{
    document.title = 'Takcooling'
  }, [])

  const sendToWhatsapp = () => {
    const phone = '+447877020977'
    window.location.href = `whatsapp://send?phone=${phone}`; 
  }

  return (


    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Hearder sendToWhatsapp={sendToWhatsapp} />
      <Section1 />
      <Section2 sendToWhatsapp={sendToWhatsapp} />
      <Section3 />
      <Grid container justifyContent={'center'}>
        <Section5 />
      </Grid>
      <Section4 />
      <Footer description={'Your success begins with our mastery in refrigeration for industrial power.'} title={'Takcooling'} />
    </ThemeProvider>
  );
}