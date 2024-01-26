import { Stack, Typography } from "@mui/material"
import image1 from '../assets/imgM2.jpg'
import image2 from '../assets/imgM1.jpg'

const Section3 = () => {

    return (
        <Stack direction={{xs: 'column', sm:'row'}} padding={{xs:1, sm:6}}>
            <Stack direction={'column'} flex={1} justifyContent={'center'} p={3}>
                <img
                    src={image1}
                    alt="the header image"
                    width={'100%'}
                    height={'90%'}
                />
            </Stack>
            <Stack direction={'column'} flex={1} justifyContent={'center'} p={3}>
                <Typography variant="body2" fontWeight={'bold'} width={'100%'}>PROFESSIONAL APPROACH</Typography>
                <Typography variant="h5" mt={3} mb={3} fontWeight={'bold'} width={'100%'}>World class quality is our priority</Typography>
                <Typography variant="body2" mb={3} width={'100%'}> Experience the future of cooling solutions with a dedicated partner focused on delivering unmatched reliability and innovation.
                    Your success begins with our mastery in refrigeration for industrial power.</Typography>
                <img
                    src={image2}
                    alt="the header image"
                    width={'100%'}
                    height={'70%'}
                />
            </Stack>
        </Stack>
    )

}

export default Section3