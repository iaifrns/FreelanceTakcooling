import { Grid, Typography } from "@mui/material"

export const Header = () => {
    return (
        <Grid container justifyContent={'center'} alignItems={'center'} height={'20vh'}>
            <Grid>
                <Typography variant="h4" fontWeight={'bold'}>Contact Us</Typography>
            </Grid>
        </Grid>
    )
}