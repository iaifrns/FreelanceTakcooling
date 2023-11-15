import { Button, Grid, Typography } from "@mui/material"
import { Icon } from '@iconify/react';

const cardInfo = [
    {
        icon: "iconoir:oil-industry",
        name: "Installation of cold room and air conditioner.",
        border: 1
    },
    {
        icon: "cil:industry",
        name: "Troubleshooting of refrigerator, air conditioner, and cold room.",
        border: 1
    },
    {
        icon: "streamline:industry-innovation-and-infrastructure-solid",
        name: "Sale of refrigeration equipment.",
        border: 0
    },
]

const Section2 = () => {

    return (
        <Grid container justifyContent={'center'} alignContent={'center'}>
            {cardInfo.map(item => (
                <Grid container xs={8} md={3} sm={8} mb={2}  p={3} justifyContent={'center'} >
                    <Icon icon={item.icon} color="brown" fontSize={100} />
                    <Typography variant="body1" textAlign={'center'} fontWeight={'bold'} mt={3} mb={3} >{item.name}</Typography>
                    <Button  style={{color:'brown'}} >Contact Us <Icon icon="guidance:left-arrow" /></Button>
                </Grid>
            ))}

        </Grid>
    )
}

export default Section2