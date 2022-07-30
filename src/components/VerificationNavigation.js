import {Link} from 'react-router-dom'
// import {useGlobalState} from '../utils/stateContext'
// import AgeVerification from './AgeVerification';

// MATERIAL UI IMPORTS
import {AppBar, Toolbar,Tabs,Tab} from '@mui/material'


const VerificationNavigation = () =>{
    return(
        <AppBar position='sticky'>
            <Toolbar>
                <Tabs value={false}>
                    <Tab label="Home" component={Link} to="/"></Tab>
                    <Tab label="Log In" component={Link} to="/login"></Tab>
                    <Tab label="About" component={Link} to="/about"></Tab>
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default VerificationNavigation;