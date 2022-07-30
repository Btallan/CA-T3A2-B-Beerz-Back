// Import global context
import { useGlobalState } from '../utils/stateContext';

// Import products components
import Products from '../components/Product/Products'

// Import events components
import Events from '../components/Event/Events'

// MATERIAL UI IMPORTS
import {Typography} from '@mui/material'

const Home = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store
    console.log(loggedInUser)

    return (
        <>
            <Typography variant='h3'>Welcome to Beerz Home</Typography>
            <img alt="Hero" style={{width: "1000px"}} src="https://www.wearegoldcoast.com.au/wp-content/uploads/2020/12/feature.jpg"></img>
            <Products />
            <Events />
        </>
    )
}

export default Home;