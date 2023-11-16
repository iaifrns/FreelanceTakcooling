import { AppBar, Box, Button, Container, CssBaseline, Grid, ThemeProvider, Toolbar, Tooltip, Typography, createTheme, useMediaQuery, useTheme } from "@mui/material"
import image1 from '../assets/imgM6.jpg'
import background from '../assets/background.png'

const defaultTheme = createTheme();

const pages = [''];

const TopBar = ({ sendToWhatsapp }: { sendToWhatsapp: () => void }) => {

    return (
        <AppBar position="static" style={{ backgroundColor: '#02132b', padding: 8 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 5,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TAKCOOLING
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent={'center'}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ mr: 4, color: 'white', display: 'block' }}
                            >
                                <Typography variant="subtitle2">{page}</Typography>

                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Button variant="outlined" onClick={sendToWhatsapp} color="inherit">Contact Us</Button>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

const Hearder = ({ sendToWhatsapp }: { sendToWhatsapp: () => void }) => {

    const theme = useTheme()

    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <TopBar sendToWhatsapp={sendToWhatsapp} />
                <Grid container component="main" sx={{ height: '100%', backgroundColor: '#02132b' }}>
                    <CssBaseline />
                    <Grid
                        container
                        xs={false}
                        sm={4}
                        md={6}
                        display={'flex'}
                        justifyContent={'center'}
                        alignContent={'center'}
                    >
                        <img
                            src={image1}
                            alt="the header image"
                            width={'80%'}
                            height={'90%'}
                        />
                    </Grid>
                    <Grid container xs={12} sm={8} md={6} bgcolor={'rgba(0,0,0,0)'} justifyContent={'center'} alignContent={'center'} >
                        <Grid container width={'80%'}>
                            <Typography variant={smallScreen ? "h5" : "h3"} color={'white'} >Empowering Industries: Your Ultimate Refrigeration Solution</Typography>
                            <Typography variant="subtitle1" color={'white'} width={'90%'} mt={smallScreen ? 4 : 8} mb={smallScreen ? 4 : 8}> I am positioned as a factory industrial leader in power, specializing in the efficient and advanced cooling solutions essential for industrial processes.</Typography>
                            <Button
                                variant="contained"
                                style={{ padding: 16, width: '25vh', backgroundColor: 'brown', marginBottom: 16 }}
                                onClick={sendToWhatsapp}
                            >
                                <Typography variant="subtitle1">Contact Us</Typography>
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default Hearder