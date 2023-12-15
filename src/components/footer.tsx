
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Footer() {

  const sendToWhatsapp = () => {
    const phone = '+447877020977'
    window.location.href = `whatsapp://send?phone=${phone}`;
  }

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box component="footer" sx={{ bgcolor: '#02132b', py: 6 }}>
      <Container maxWidth="lg">

        <Typography variant={isSmallScreen ? 'h5' : 'h4'} color={'white'} fontWeight={'bold'}>Innovating the high-tech future: {!isSmallScreen && <br/> }  Our leading drive</Typography>

        <Grid container justifyContent={isSmallScreen ? 'left' : 'space-between'} direction={isSmallScreen ? 'column' : "row"} alignContent={'left'}>

          <Grid mt={5}>
            <Typography variant='h6' color={'white'} fontWeight={'bold'} mb={3}>Address</Typography>
            <Typography variant='body2' color={'lightgray'} mb={1}>London</Typography>
            <Typography variant='body2' color={'lightgray'} mb={1}>Postcode Se15 6rs</Typography>
            <Typography variant='body2' color={'lightgray'} mb={1}>Rue 149 glengall road </Typography>
          </Grid>

          <Grid mt={5}>
            <Typography variant='h6' color={'white'} fontWeight={'bold'} mb={3}>Say Hello</Typography>
            <Typography variant='body2' color={'lightgray'} mb={1}>00447877020977</Typography>
            <Typography variant='body2' color={'lightgray'} mb={1}>takcooling@gmail.com</Typography>
          </Grid>

          <Grid mt={5}>
            <Typography variant='h6' color={'white'} fontWeight={'bold'} mb={3}>Socials</Typography>
            <Typography variant='body2' color={'lightgray'} mb={1}>Facebook</Typography>
            <Typography variant='body2' onClick={sendToWhatsapp} color={'lightgray'} mb={1}>Whatsapp</Typography>
          </Grid>

        </Grid>

        <Grid container height={2} mt={5} bgcolor={'lightgray'}></Grid>

        <Typography variant='body2' mt={3} color={'gray'}>WillsTech © 2023. All Rights Reserved.</Typography>

      </Container>
    </Box>
  );
}