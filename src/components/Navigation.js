import {Link} from 'react-router-dom'
import {useGlobalState} from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'


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
        <nav>
            {/* Links prevent a re-render of the page */}
            <Link to="/">Home</Link>            
            <Link to="/products">Products</Link>  
            <Link to="/about">About</Link>     
            {/* <Link to="/signup">Sign Up</Link>     
            <Link to="/login">Log In</Link> */}
            {!loggedInUser && <Link to="/signup">Sign Up</Link>}  

            
            {!loggedInUser && <Link to="/login">Log In</Link>}

            {loggedInUser && <Link to={`/${loggedInUser.username}`} >User</Link>}                     
            {loggedInUser && <Link to="/" onClick={logout}>Log Out</Link>}                     
        </nav>
    )
}

export default Navigation;