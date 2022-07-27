// Import global context
// import { useGlobalState } from '../utils/stateContext';

// Import products components
import Products from '../components/Product/Products'

// Import events components
// import Events from '../components/Event/Events'


const Home = () => {

    return (
        <>
            <h1>Welcome to Beerz Home</h1>
            {/* <img alt="Hero Image" style={{width: "1000px"}} src="https://www.wearegoldcoast.com.au/wp-content/uploads/2020/12/feature.jpg"></img> */}
            <Products />
            {/* <Events /> */}
        </>
    )
}

export default Home;