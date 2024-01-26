import { Button, Stack, Typography } from "@mui/material"
import { Icon } from '@iconify/react';

import { Link } from "react-router-dom";

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
        <Stack direction={{xs: 'column',sm:'row'}} justifyContent={'space-evenly'} alignContent={'center'}>
            {cardInfo.map((item, index) => (
                <Stack direction={'column'} key={index} justifyContent={'center'} alignItems={'center'} flex={1} p={3}>
                    <Icon icon={item.icon} color="brown" fontSize={100} />
                    <Typography variant="body1" textAlign={'center'} fontWeight={'bold'} mt={3} mb={3} >{item.name}</Typography>

                    <Link to={"/contact"} style={{ textDecoration: 'none', color: 'white' }}>
                        <Button style={{ color: 'brown' }} >Contact Us <Icon icon="guidance:left-arrow" /></Button>
                    </Link>
                </Stack>

            ))}

        </Stack>
    )
}

export default Section2