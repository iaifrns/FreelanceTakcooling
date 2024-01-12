import { CssBaseline, Grid, ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material"
import { Header } from "../components/contactHeader"
import { FormContent } from "../components/formContent";
import { TopBar } from "../components/header";
import Footer from "../components/footer";
import ContactDetails from "../components/contactDetails";
/* import { GoogleMap, Marker } from "@react-google-maps/api"; */

const defaultTheme = createTheme();

export const ContactPage = () => {

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    /* const mapContainerStyle = {
        width: '100vw',
        height: '100vh',
      };
      const center = {
        lat: 7.2905715, // default latitude
        lng: 80.6337262, // default longitude
      }; */

    const sendToWhatsapp = () => {
        const phone = '+447877020977'
        window.location.href = `whatsapp://send?phone=${phone}`;
      }

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <TopBar isSmallScreen = {isSmallScreen} />
            <Header />
            {/* <Grid container>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={10}
                    center={center}
                >
                    <Marker position={center} />
                </GoogleMap>
            </Grid> */}
            <Grid container justifyContent={'center'}>
                <Grid container m={isSmallScreen ? 2 : 4} width={isSmallScreen ? '100%' : '80%'}>
                    <Grid xs={12} md={3} p={2}>
                        <ContactDetails onClick={sendToWhatsapp} />
                    </Grid>
                    <Grid xs={12} md={8} p={2}>
                        <FormContent isSmallScreen={isSmallScreen} />
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </ThemeProvider>
    )
}