import { Grid, Typography } from "@mui/material"
import image1 from '../assets/imgM2.jpg'
import image2 from '../assets/imgM1.jpg'

const Section3 = () => {

    return (
        <Grid container justifyContent={'center'} mt={8}>
            <Grid container xs={8} md={5} sm={8} mb={3} justifyContent={'center'}>
                <img
                    src={image1}
                    alt="the header image"
                    width={'90%'}
                    height={'90%'}
                />
            </Grid>
            <Grid container xs={8} md={5} sm={8} justifyContent={'center'}>
                <Typography variant="body2" fontWeight={'bold'} width={'90%'}>PROFESSIONAL APPROACH</Typography>
                <Typography variant="h5" mt={3} mb={3} fontWeight={'bold'} width={'90%'}>World class quality is our priority</Typography>
                <Typography variant="body2" mb={3} width={'90%'}> Experience the future of cooling solutions with a dedicated partner focused on delivering unmatched reliability and innovation.
                 Your success begins with our mastery in refrigeration for industrial power.</Typography>
                <img
                    src={image2}
                    alt="the header image"
                    width={'90%'}
                    height={'70%'}
                />
            </Grid>
        </Grid>
    )

}

export default Section3