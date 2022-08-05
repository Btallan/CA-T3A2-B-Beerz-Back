// Import react
import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {Link} from 'react-router-dom'

import logo from '../images/beerz-logo3.png'


import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

const NavDrawer = () => {

    const [open, setOpen] = useState(false)

    return(
        <>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)} PaperProps={{sx: {backgroundColor: '#5dcf74'}}}>
                <List>
                    <ListItem>
                        <img alt='Logo' src={logo} />
                    </ListItem>
                    <ListItem>
                        <ListItemButton button component={Link} to="/" onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <HomeRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton button component={Link} to="/about" onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <HelpOutlineRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary='About'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton button component={Link} to="/login" onClick={() => setOpen(false)}>
                            <ListItemIcon>
                                <LoginRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary='Log In'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpen(!open)} sx={{marginLeft: 'auto'}}>
                <MenuRoundedIcon/>
            </IconButton>
        </>
    )
}

export default NavDrawer;