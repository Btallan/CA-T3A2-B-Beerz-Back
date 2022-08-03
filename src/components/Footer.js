import {Link} from 'react-router-dom'


// MATERIAL UI IMPORTS
import {Typography, Box, Container} from '@mui/material'


const Footer = () => {
    return (
        <div className='footer'>
            <Box>
                <Container>
                    <Typography variant="h6">Beers ©</Typography>
                    <Link to='/contact' >Contact Us</Link>
                </Container>
            </Box>
        </div>
    )
}

export default Footer;