import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'

// MATERIAL UI IMPORTS
import {AppBar, Toolbar,Tabs,Tab} from '@mui/material'


const Navigation = () =>{
    // Calling store and dispatch into the component, so that nav has access to it
    const {store,dispatch} = useGlobalState();
    // Unpacking the store
    const {loggedInUser} = store

    const navigate = useNavigate()

    // Cannot call useNavigate, directly in a function, it must be in the top level,
    // So we place it within a constant, which will be called in the function,
    // const navigate = useNavigate();

    const logout = (event) => {
        event.preventDefault()
        dispatch({
            type: "setLoggedInUser",
            data: ""
        })
        navigate('/')
    }
    return(
        <AppBar position='sticky' >
            <Toolbar>
                <Tabs value={false}>
                    <Tab label="Home" component={Link} to="/"></Tab>
                    <Tab label="Products" component={Link} to="/products"></Tab>
                    <Tab label="About" component={Link} to="/about"></Tab>   

                    {!loggedInUser && <Tab label="Sign Up" component={Link} to="/signup"></Tab>}
                    {!loggedInUser && <Tab label="Log In" component={Link} to="/login"></Tab>}
                    {loggedInUser && <Tab label="User" component={Link} to={`/${loggedInUser.username}`}></Tab>}
                    {loggedInUser && <Tab label="Log Out" component={Link} to="/" onClick={logout}></Tab>}

                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;