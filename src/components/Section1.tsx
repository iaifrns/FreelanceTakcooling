import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material"

const Section1 = () => {

    const theme = useTheme()

    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Stack direction={'column'} flex={1} p={3} justifyContent={'center'} padding={{xs:3, sm:6}}>
            <Typography variant="subtitle1" fontWeight={'bold'}>WHAT WE OFFER</Typography>
            <Stack direction={{xs:'column',sm:'row'}} p={'10px 0px'}>
                <Stack flex={1}>
                    <Typography variant={smallScreen ? "h5" : "h4"} width={'100%'} fontWeight={'bold'}>Mastering Refrigeration Power for Industrial Excellence</Typography>
                </Stack>
                <Stack direction={'column'} flex={2} p={'10px 0px'}>
                    <Typography width={'100%'}>Discover unparalleled expertise with our Refrigeration Services, where we redefine industry standards through mastery in harnessing refrigeration power.</Typography>
                    <Typography mt={5} width={'100%'}> Our commitment to excellence ensures your industrial needs are not just met but surpassed, setting new benchmarks in efficiency and performance. Experience the future of cooling solutions with a dedicated partner focused on delivering unmatched reliability and innovation.
                        Your success begins with our mastery in refrigeration for industrial power.</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Section1