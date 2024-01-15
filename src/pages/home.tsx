import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Hearder from '../components/header';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Footer from '../components/footer';
import Section5 from '../components/Section5';
import { Grid, useMediaQuery } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HomePage() {

  /* const sendToWhatsapp = () => {
    const phone = '+447877020977'
    window.location.href = `whatsapp://send?phone=${phone}`; 
  } */

  const theme = useTheme()

  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (


    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Hearder />
      <Section1 />
      <Section2  />
      <Section3 />
      <Grid container justifyContent={'center'}>
        <Section5 isSmallScreen={smallScreen} />
      </Grid>
      <Section4 />
      <Footer />
    </ThemeProvider>
  );
}