import { AppBar, Box, Button, CssBaseline, Grid, ThemeProvider, Tooltip, Typography, createTheme, useMediaQuery, useTheme } from "@mui/material"
import image1 from '../assets/imgM6.jpg'
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

export const TopBar = ({ isSmallScreen }: { isSmallScreen: boolean }) => {

    return (
        <AppBar position="static" style={{ backgroundColor: '#02132b', padding: 8 }}>
            <Grid container mt={3} justifyContent={'center'}>
                <Grid container width={'90%'} justifyContent={ !isSmallScreen ? 'space-between' : 'center'}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: isSmallScreen ? 0 : 5,
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
                    </Link>

                    {!isSmallScreen && <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Link to={"/contact"} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                                <Button variant="outlined" color="inherit" fullWidth>
                                    <span style={{ fontSize: '12px' }}>Contact Us</span>
                                </Button>
                            </Link>
                        </Tooltip>
                    </Box>
                    }

                </Grid>

            </Grid>
        </AppBar>
    )
}

const Hearder = () => {

    const theme = useTheme()

    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <TopBar isSmallScreen= {smallScreen} />
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
                            <Typography variant="subtitle1" align="justify" color={'white'} mt={smallScreen ? 4 : 8} mb={smallScreen ? 4 : 8}>
                                I am positioned as a factory industrial leader in power, specializing in the efficient
                                and advanced cooling solutions essential for industrial processes.
                            </Typography>
                            <Link to={"/contact"} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>

                                <Button
                                    variant="contained"
                                    style={{ padding: 16, width: smallScreen ? '100%' : '36%', backgroundColor: 'brown', marginBottom: 16 }}
                                >
                                    <Typography variant="subtitle1">Contact Us</Typography>
                                </Button>
                            </Link>

                        </Grid>

                    </Grid>

                </Grid>
            </ThemeProvider>
        </>
    )
}

export default Hearder