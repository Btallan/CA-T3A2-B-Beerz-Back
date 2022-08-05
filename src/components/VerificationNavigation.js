import {Link} from 'react-router-dom'
import { useState } from 'react'

import logo from '../images/beerz-logo3.png'


// MATERIAL UI IMPORTS
import {AppBar, Toolbar,Tabs,Tab, Grid, Box, Button, useTheme, useMediaQuery} from '@mui/material'

import VerificationDrawer from './VerificationDrawer'


const VerificationNavigation = () =>{
    // Cannot call useNavigate, directly in a function, it must be in the top level,
    // So we place it within a constant, which will be called in the function,
    // const navigate = useNavigate();

    // State to determine what tab is highlighted in the navigation
    const [value, setValue] = useState(0);

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    return(
        <AppBar sx={{backgroundColor: '#5dcf74'}}>
            <Toolbar>
                
                {isMatch ? 
                    <>
                        <img alt='Logo' src={logo} />
                        <VerificationDrawer />  
                    </>
                :
                <Grid container sx={{placeItems: 'center'}}>
                    <Grid item xs={3}>
                        <img alt='Logo' src={logo} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justifyContent='center'>
                            <Tabs value={value} textColor='inherit' indicatorColor='secondary' onChange={(e, value) => setValue(value)} >
                                <Tab label="Home" component={Link} to="/"></Tab>
                                <Tab label="About" component={Link} to="/about"></Tab>
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Grid xs={3}>
                        <Box display='flex'>
                            <Button variant='contained' component={Link} to="/login" sx={{marginLeft: 'auto', backgroundColor: 'orange'}} >Login</Button>
                        </Box>
                    </Grid>
                </Grid>}
            </Toolbar>
        </AppBar>
    )
}

export default VerificationNavigation;