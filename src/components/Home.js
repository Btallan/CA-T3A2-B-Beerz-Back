// Import global context
import { useGlobalState } from '../utils/stateContext';

// Import products components
import Products from '../components/Product/Products'

// Import events components
import Events from '../components/Event/Events'

// MATERIAL UI IMPORTS
// import {Typography} from '@mui/material'
import WhoAreWe from './WhoAreWe';

const Home = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store
    // console.log(loggedInUser)

    return (
        <>
            <div id='hero-container'>
                {/* <Typography variant='h3' style={{textAlign: 'center'}}>Welcome to Beerz Home</Typography> */}
                <img alt="Hero" style={{width: "100%"}} src="https://www.wearegoldcoast.com.au/wp-content/uploads/2020/12/feature.jpg"></img>
            </div>
            <div className='spacer'></div>
            <Products />
            <div className='spacer'></div>
            <WhoAreWe />
            <div className='spacer'></div>
            <Events />
            <div className='spacer'></div>
        </>
    )
}

export default Home;