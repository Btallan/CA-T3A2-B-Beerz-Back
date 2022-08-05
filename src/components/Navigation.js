import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

import logo from '../images/beerz-logo3.png'

// MATERIAL UI IMPORTS
import {AppBar, Toolbar,Tabs,Tab, Grid, Box, Button, useTheme, useMediaQuery} from '@mui/material'

import NavDrawer from './NavDrawer'


const Navigation = () =>{
    // Calling store and dispatch into the component, so that nav has access to it
    const {store,dispatch} = useGlobalState();
    // Unpacking the store
    const {loggedInUser} = store

    const navigate = useNavigate()

    // Cannot call useNavigate, directly in a function, it must be in the top level,
    // So we place it within a constant, which will be called in the function,
    // const navigate = useNavigate();

    // State to determine what tab is highlighted in the navigation
    const [value, setValue] = useState(0);

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    const logout = (event) => {
        event.preventDefault()
        dispatch({
            type: "setLoggedInUser",
            data: ""
        })
        navigate('/')
    }


    return(
        <AppBar sx={{backgroundColor: '#5dcf74'}}>
            <Toolbar>
                
                {isMatch ? 
                    <>
                        <img alt='Logo' src={logo} />
                        <NavDrawer />  
                    </>
                :
                <Grid container sx={{placeItems: 'center'}}>
                    <Grid item xs={3}>
                        <img alt='Logo' src={logo} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justifyContent='center'>
                            <Tabs value={value} textColor='inherit' indicatorColor='secondary' onChange={(e, value) => setValue(value)} className='centerNavLinks'>
                                <Tab label="Home" component={Link} to="/"></Tab>
                                <Tab label="Products" component={Link} to="/products"></Tab>
                                <Tab label="About" component={Link} to="/about"></Tab>
                            </Tabs>
                        </Grid>
                    </Grid>
                    {!loggedInUser && 
                    <>
                        <Grid xs={3}>
                            <Box display='flex'>
                                <Button variant='contained' sx={{marginLeft: 'auto', backgroundColor: 'orange'}} component={Link} to="/login">Login</Button>
                                <Button variant='contained' sx={{marginLeft: 1, backgroundColor: 'orange' }} component={Link} to="/signup">Sign Up</Button>
                            </Box>
                        </Grid>
                    </>}
                    {loggedInUser && 
                    <>
                        <Grid xs={3}>
                            <Box display='flex'>
                                <Button variant='contained' sx={{marginLeft: 'auto', backgroundColor: 'orange'}} component={Link} to={`/${loggedInUser.username}`}>User</Button>
                                <Button variant='contained' sx={{marginLeft: 1, backgroundColor: 'orange' }}  component={Link} to="/" onClick={logout}>Logout</Button>
                            </Box>
                        </Grid>
                    </>}

                </Grid>}
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;