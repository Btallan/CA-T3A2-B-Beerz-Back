import {useParams} from 'react-router-dom'
import { useGlobalState } from '../../utils/stateContext';

// Import components
import Reviews from './Reviews'
import ProductDescription from './ProductDescription';
import ProductProcess from './ProductProcess'
import PurchaseProduct from './PurchaseProduct'

// import ProductTabs from './ProductTabs'

// MATERIAL UI IMPORTS
import {Tab, Box, Typography} from '@mui/material'

import { TabPanel, TabContext, TabList } from '@mui/lab';
import { useState } from 'react';



const ProductDetails = () => {
    // Calling the store into the component through global state
    const {store} = useGlobalState()
    // Unpacking the store
    const {productList, loggedInUser} = store

    // Saving the params from URL
    const params = useParams();
    // console.log(params)

    const getProduct = (id) => {
        return productList.find(product => product.id === parseInt(id))
    }

    const product = getProduct(params.id)


    // Handling the submission of the form
    // const handleButton = (event) => {
    //     // event.preventDefault()
    //     // console.log(event.target.name)
    //     // tabSelection = event.target.name
    //     // console.log(tabSelection)
    // }


    // Store the current URL
    const url = window.location.href
    // console.log(url)
    // Slice the current url to get the last 8 characters, -8 to start from the end
    const lastChars = url.slice(-8)
    console.log(lastChars)
    // Initialise the variable to store the url boolean
    // var urlBoolean

    var initialValue = "1"
    if(lastChars === 'reviewed'){
        // Initialise the variable
        initialValue = "3"
    } 

    const [value, setValue] = useState(initialValue)
    const handleChange = (event,value) => {
        console.log(value)
        setValue(value)
    }

    return (
        <>
            <Typography variant='h4'>{product.name}</Typography>
            <img alt="Product IMG" src={product.productIMG} style={{height: "200px"}}></img>     
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Description" value="1" />
                    <Tab label="Brewing Process" value="2" />
                    <Tab label="Reviews" value="3" />
                    {loggedInUser && <Tab label="Purchase" value="4" />} 
                </TabList>
            </Box>
            <TabPanel value="1"><ProductDescription product={product}/></TabPanel>
            <TabPanel value="2"><ProductProcess product={product}/></TabPanel>
            <TabPanel value="3"><Reviews product={product}/></TabPanel>
            {/* Purchasing Component */}
            {loggedInUser ?
                <TabPanel value="4"><PurchaseProduct product={product}/></TabPanel>
            :
                    null
            }
            </TabContext>


        </>
    )





}

export default ProductDetails;