import { AppBar, Box, Button, Stack, ThemeProvider, Toolbar, Tooltip, Typography, createTheme, styled, useMediaQuery, useTheme } from "@mui/material"
import image1 from '../assets/imgM6.jpg'
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

export const TopBar = () => {

    return (
        <AppBar position="static" style={{ backgroundColor: '#02132b' }}>
            <Toolbar sx={{justifyContent: 'space-between', p: 3}}>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
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
                </Link>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}>
                    <Tooltip title="Open settings">
                        <Link to={"/contact"} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                            <Button variant="outlined" color="inherit" fullWidth>
                                <span style={{ fontSize: '12px' }}>Contact Us</span>
                            </Button>
                        </Link>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

const Hearder = () => {

    const theme = useTheme()

    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    const BoxContent = styled(Box)(() => ({
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px 10px',
        padding: '8px'
    }));

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <TopBar />
                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ backgroundColor: '#02132b', p: "0px 18px" }}>

                    <BoxContent
                    >
                        <img
                            src={image1}
                            alt="the header image"
                            width={'100%'}
                            height={'90%'}
                        />
                    </BoxContent>
                    <BoxContent
                    >
                        <Typography variant={smallScreen ? "h5" : "h3"} width={'95%'} color={'white'} >Empowering Industries: Your Ultimate Refrigeration Solution</Typography>
                        <Typography variant="subtitle1" align="justify" color={'white'} width={'95%'} mt={4} mb={4}>
                            I am positioned as a factory industrial leader in power, specializing in the efficient
                            and advanced cooling solutions essential for industrial processes.
                        </Typography>
                        <Link to={"/contact"} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>

                            <Button
                                variant="contained"
                                style={{ padding: 16, width: smallScreen ? '95%' : '36%', backgroundColor: 'brown', marginBottom: 16 }}
                            >
                                <Typography variant="subtitle1">Contact Us</Typography>
                            </Button>
                        </Link>
                    </BoxContent>

                </Stack>
            </ThemeProvider>
        </>
    )
}

export default Hearder