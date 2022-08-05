// Import react
import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {Link} from 'react-router-dom'

import {useGlobalState} from '../utils/stateContext'

import {useNavigate} from 'react-router-dom'

import logo from '../images/beerz-logo3.png'



import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const NavDrawer = () => {
    // Calling store and dispatch into the component, so that nav has access to it
    const {store,dispatch} = useGlobalState();
    // Unpacking the store
    const {loggedInUser} = store

    const [open, setOpen] = useState(false)

    const navigate = useNavigate()


    const logout = (event) => {
        event.preventDefault()
        dispatch({
            type: "setLoggedInUser",
            data: ""
        })
        setOpen(false)
        navigate('/')
    }


    return(
        <>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)} PaperProps={{sx: {backgroundColor: '#5dcf74'}}}>
                <List>
                    <ListItem>
                        <img alt='Logo' src={logo} />
                    </ListItem>
                    <ListItem>
                        <ListItemButton component={Link} to="/" onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <HomeRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component={Link} to="/products" onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <SportsBarRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Products'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component={Link} to="/about" onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <HelpOutlineRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary='About'/>
                        </ListItemButton>
                    </ListItem>
                    {!loggedInUser && 
                    <>
                    <ListItem>
                        <ListItemButton component={Link} to="/login" onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <LoginRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Log In'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component={Link} to="/signup" onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <PermIdentityRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Sign Up'/>
                        </ListItemButton>
                    </ListItem>
                    </>}
                    {loggedInUser &&
                        <>
                            <ListItem>
                                <ListItemButton component={Link} to={`/${loggedInUser.username}`} onClick={() => setOpen(false)}>
                                    <ListItemIcon>
                                        <AccountBoxRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='User'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton component={Link} to="/" onClick={logout}>
                                    <ListItemIcon>
                                        <PermIdentityRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Logout'/>
                                </ListItemButton>
                            </ListItem> 
                        </>
                    }
                </List>
            </Drawer>
            <IconButton onClick={() => setOpen(!open)} sx={{marginLeft: 'auto'}}>
                <MenuRoundedIcon/>
            </IconButton>
        </>
    )
}

export default NavDrawer;