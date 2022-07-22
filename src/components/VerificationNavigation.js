import {Link} from 'react-router-dom'
// import {useGlobalState} from '../utils/stateContext'
// import AgeVerification from './AgeVerification';


const VerificationNavigation = () =>{


    return(
        <nav>
            {/* Links prevent a re-render of the page */}            
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/about">About</Link>   
        </nav>
    )
}

export default VerificationNavigation;