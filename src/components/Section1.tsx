import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"

const Section1 = () => {

    const theme = useTheme()

    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Grid container justifyContent={'center'} p={8}>
            <Grid xs={12} m={1}>
                <Typography variant="subtitle1" fontWeight={'bold'}>WHAT WE OFFER</Typography>
            </Grid>
            <Grid xs={12} md={6} sm={8} mb={5} >
                <Grid container justifyContent={'center'} alignContent={'center'} height={'100%'}>
                    <Typography variant={smallScreen ? "h5" : "h4"} width={'90%'} fontWeight={'bold'}>Mastering Refrigeration Power for Industrial Excellence</Typography>

                </Grid>
            </Grid>
            <Grid xs={12} md={6} sm={8} >
                <Grid container justifyContent={'center'}>
                    <Typography width={'90%'}>Discover unparalleled expertise with our Refrigeration Services, where we redefine industry standards through mastery in harnessing refrigeration power.</Typography>
                    <Typography mt={5} width={'90%'}> Our commitment to excellence ensures your industrial needs are not just met but surpassed, setting new benchmarks in efficiency and performance. Experience the future of cooling solutions with a dedicated partner focused on delivering unmatched reliability and innovation.
                        Your success begins with our mastery in refrigeration for industrial power.</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Section1