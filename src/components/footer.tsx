import { Icon } from '@iconify/react/dist/iconify.js';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © by willsTech '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  const sendToWhatsapp = () => {
    const phone = '+327877020977'
    window.location.href = `whatsapp://send?phone=${phone}`; 
  }

  return (
    <Box component="footer" sx={{ bgcolor: '#02132b', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" color={'white'} fontWeight={'bold'} gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          color={'white'}
          mt={3}
        >
          {description}
        </Typography>
        <Grid container justifyContent={'center'} mt={3} mb={3}>
        <Icon onClick={sendToWhatsapp} icon="logos:whatsapp-icon" fontSize={24} style={{margin: 5}} />
        <Icon icon="logos:facebook" fontSize={24} style={{margin: 5}} />
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
}