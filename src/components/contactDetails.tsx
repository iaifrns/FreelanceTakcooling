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
        </>
    )
}

export default ContactDetails