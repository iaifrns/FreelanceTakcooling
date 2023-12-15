import { Grid, Typography } from "@mui/material"

export const Header = () => {
    return (
        <Grid container bgcolor={'#02132b'} justifyContent={'center'} alignItems={'center'} height={'20vh'}>
            <Grid>
                <Typography variant="h4" color={'white'} fontWeight={'bold'}>Contact Us</Typography>
            </Grid>
        </Grid>
    )
}