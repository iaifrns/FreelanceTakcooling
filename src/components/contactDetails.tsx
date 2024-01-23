import { Typography } from "@mui/material"

const ContactDetails = ({ onClick }: { onClick: () => void }) => {
    return (
        <>
            <Typography variant="h5" fontWeight={'bold'} mb={3}>Contact Details</Typography>
            <Typography color={'gray'}>London</Typography>
            <Typography color={'gray'}>Postcode Se15 6rs</Typography>
            <Typography color={'gray'} mb={3}>Rue 149 glengall road</Typography>
            <Typography color={'gray'} mb={3}>takcooling@gmail.com</Typography>
            <Typography variant="h6" fontWeight={'bold'} onClick={onClick} sx={{cursor:"pointer"}}>00447877020977</Typography>
            <Typography variant="body2" fontWeight={'bold'} mb={3} mt={3}>Installation of cold room and air conditioner.</Typography>
            <Typography variant="body2" fontWeight={'bold'} mb={3}>Troubleshooting of refrigerator, air conditioner, and cold room.</Typography>
            <Typography variant="body2" fontWeight={'bold'} mb={3}>Sale of refrigeration equipment</Typography>
        </>
    )
}

export default ContactDetails