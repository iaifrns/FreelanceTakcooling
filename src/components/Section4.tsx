import { Stack, Typography } from "@mui/material"

const Section4 = () => {
    return (
        <Stack direction={{xs: 'column',sm:'row'}} justifyContent={'space-evenly'} bgcolor={'brown'}>

            <Stack direction={'column'} flex={1} justifyContent={'center'} p={3}>
                <Typography variant="h4" width={'100%'} textAlign={'center'} color={'white'}>96%</Typography>
                <Typography variant="body2" width={'100%'} textAlign={'center'} color={'white'}>Casses solved</Typography>
            </Stack>
            <Stack direction={'column'} flex={1} justifyContent={'center'} p={3}>
                <Typography variant="h4" width={'100%'} textAlign={'center'} color={'white'}>252</Typography>
                <Typography variant="body2" width={'100%'} textAlign={'center'} color={'white'}>Projects</Typography>
            </Stack>
            <Stack direction={'column'} flex={1} justifyContent={'center'} p={3}>
                <Typography variant="h4" width={'100%'} textAlign={'center'} color={'white'}>95%</Typography>
                <Typography variant="body2" width={'100%'} textAlign={'center'} color={'white'}>Happy clients</Typography>
            </Stack>
            <Stack direction={'column'} flex={1} justifyContent={'center'} p={3}>
                <Typography variant="h4" width={'100%'} textAlign={'center'} color={'white'}>76%</Typography>
                <Typography variant="body2" width={'100%'} textAlign={'center'} color={'white'}>Yearly Profit</Typography>
            </Stack>

        </Stack>
    )
}

export default Section4