import { Grid, Typography } from "@mui/material"

const Section4 = () => {
    return (
        <Grid container bgcolor={'brown'} justifyContent={'center'} p={4} mt={8}>
        <Grid xs={8} sm={8} md={2}  justifyContent={'center'} mb={3}>
            <Typography variant="h4" width={'100%'} textAlign={'center'} color={'white'}>96%</Typography>
            <Typography variant="body2" width={'100%'} textAlign={'center'} color={'white'}>Casses solved</Typography>
        </Grid>
            <Grid xs={8} sm={8} md={2} mb={3}>
                <Typography variant="h4" width={'100%'} textAlign={'center'} color={'white'}>252</Typography>
                <Typography variant="body2" width={'100%'} textAlign={'center'} color={'white'}>Projects</Typography>
            </Grid>
            <Grid xs={8} sm={8} md={2} mb={3}>
                <Typography variant="h4" width={'100%'} textAlign={'center'} color={'white'}>95%</Typography>
                <Typography variant="body2" width={'100%'} textAlign={'center'} color={'white'}>Happy clients</Typography>
            </Grid>
            <Grid xs={8} sm={8} md={2} color={'white'} >
                <Typography variant="h4" width={'100%'} textAlign={'center'}>76%</Typography>
                <Typography variant="body2" width={'100%'} textAlign={'center'} color={'white'}>Yearly Profit</Typography>
            </Grid>
        </Grid>
    )
}

export default Section4