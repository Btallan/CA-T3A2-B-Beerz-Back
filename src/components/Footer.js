// import {Link} from 'react-router-dom'
import {Link, Typography} from '@mui/material'


const Footer = () => {
    return (
        <>
            <Typography variant="h6">Beers ©</Typography>
            {/* <Link to="/contact">Contact Us</Link> */}

            <Link href='/contact'>Contact Us</Link>
        </>
    )
}

export default Footer;