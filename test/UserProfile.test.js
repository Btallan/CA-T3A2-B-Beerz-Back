/**
 * @jest-environment jsdom
 */

// import dependencies
import React, {Component} from 'react';
// Import user-event methods
import userEvent from '@testing-library/user-event'
// import react-testing methods
import { fireEvent, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
// Import the Bookings
import UserBooking from '../src/components/User/UserBooking';
import userOrders from '../src/components/User/UserBooking';
// Import context so that it can be used for testing
import {StateContext} from '../src/utils/stateContext'
// Import router so that navigate issue does not arise
import {BrowserRouter as Router} from 'react-router-dom';
import UserOrders from '../src/components/User/UserOrders';
//
// User Info
//
const loggedInUser = {
    id: 4,
    firstName: "Ben",
    lastName: "Allan",
    email: "ben@email.com",
    mobile: "0488547788",
    username: "btallan",
    dob: "29/10/1995",
    password: "123456",
    profileIMG: "https://scontent.fbne6-1.fna.fbcdn.net/v/t1.18169-9/14039945_1151143301617696_46751634297372470_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=riy08V6YREQAX9b6YTL&_nc_oc=AQkcsSH4EFnuaO8VVho7bHe8iF-XHa9077p8yuNY940lpo02hkRUSSeM9HGIi3zuWpDByXPnqZXBmJ190uYl3QrJ&tn=hPx2voBG9KtjgKTn&_nc_ht=scontent.fbne6-1.fna&oh=00_AT9LNlmsmgGfEwI525HAJWdvPe1SDrxrb76c47Na0UL0OQ&oe=6300BF31",
    flavourTags: [1,3,4],
    address: "12 Pelican Ave, Burleigh Heads, 4220, QLD "
}
//
// Booking Data
//
const testBooking ={
    id: 1,
    eventID: 1,
    userID: 1,
    quantity: 4,
    status: false
}
var eventList = [
    {
        id: 1,
        title: "Tour & Tasting #1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet rhoncus elit. Aenean fermentum aliquet dolor, vitae pulvinar dolor vulputate a. Duis suscipit mauris augue, non auctor nulla consectetur et. Sed nunc libero, laoreet et orci id, viverra ornare lectus. Aliquam erat volutpat. Praesent hendrerit lacus eros, nec elementum.",
        eventIMG: "https://media-cdn.tripadvisor.com/media/photo-s/1c/74/a9/09/distillery-tour-at-granddad.jpg",
        date: "23/07/2022",
        time: "9:00",
        status: "upcoming"
    },
    {
        id: 2,
        title: "Tour & Tasting #2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet rhoncus elit. Aenean fermentum aliquet dolor, vitae pulvinar dolor vulputate a. Duis suscipit mauris augue, non auctor nulla consectetur et. Sed nunc libero, laoreet et orci id, viverra ornare lectus. Aliquam erat volutpat. Praesent hendrerit lacus eros, nec elementum.",
        eventIMG: "https://media-cdn.tripadvisor.com/media/photo-s/1c/74/a9/09/distillery-tour-at-granddad.jpg",
        date: "30/07/2022",
        time: "9:00",
        status: "upcoming"
    },
    {
        id: 3,
        title: "Tour & Tasting #2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet rhoncus elit. Aenean fermentum aliquet dolor, vitae pulvinar dolor vulputate a. Duis suscipit mauris augue, non auctor nulla consectetur et. Sed nunc libero, laoreet et orci id, viverra ornare lectus. Aliquam erat volutpat. Praesent hendrerit lacus eros, nec elementum.",
        eventIMG: "https://media-cdn.tripadvisor.com/media/photo-s/1c/74/a9/09/distillery-tour-at-granddad.jpg",
        date: "30/07/2022",
        time: "9:00",
        status: "upcoming"
    }
]
//
// Product Data
//
//
const testPorduct ={
        "id": 1,
        "name": "Byron Bay Larger",
        "title": "As sublte as a hippe in the bay!",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis fermentum feugiat. Curabitur erat velit, porttitor vel turpis eu, faucibus pellentesque purus. Aliquam erat volutpat. Ut vulputate in est eget suscipit. Fusce ex urna, hendrerit id ex quis, aliquam pharetra velit. Donec faucibus egestas dignissim. Donec venenatis vestibulum laoreet. Fusce.",
        "productIMG": "https://media.danmurphys.com.au/dmo/product/60281-1.png?impolicy=PROD_LG",
        "tags": "1,3,5",
        "price": "29.95",
        "processIMG": "https://cdn.shopify.com/s/files/1/0270/7000/5381/articles/Disjobel_Imagen_articulo_1.jpg?v=1645808562"
}
const productList = [
    {
        "id": 1,
        "name": "Byron Bay Larger",
        "title": "As sublte as a hippe in the bay!",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis fermentum feugiat. Curabitur erat velit, porttitor vel turpis eu, faucibus pellentesque purus. Aliquam erat volutpat. Ut vulputate in est eget suscipit. Fusce ex urna, hendrerit id ex quis, aliquam pharetra velit. Donec faucibus egestas dignissim. Donec venenatis vestibulum laoreet. Fusce.",
        "productIMG": "https://media.danmurphys.com.au/dmo/product/60281-1.png?impolicy=PROD_LG",
        "tags": "1,3,5",
        "price": "29.95",
        "processIMG": "https://cdn.shopify.com/s/files/1/0270/7000/5381/articles/Disjobel_Imagen_articulo_1.jpg?v=1645808562"
    },
    {
        "id": 2,
        "name": "Furphy Original Ale",
        "title": "No furphy of how good it is!",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis fermentum feugiat. Curabitur erat velit, porttitor vel turpis eu, faucibus pellentesque purus. Aliquam erat volutpat. Ut vulputate in est eget suscipit. Fusce ex urna, hendrerit id ex quis, aliquam pharetra velit. Donec faucibus egestas dignissim. Donec venenatis vestibulum laoreet. Fusce.",
        "productIMG": "https://media.danmurphys.com.au/dmo/product/601575-1.png?impolicy=PROD_LG",
        "tags": "1,3,5",
        "price": "29.95",
        "processIMG": "https://cdn.shopify.com/s/files/1/0270/7000/5381/articles/Disjobel_Imagen_articulo_1.jpg?v=1645808562"
    }
]
// Order Data
//
const testOder ={
    id: 1,
    userID: 1,
    productID: 1,
    quantityOrdered: 2,
    orderDate: "20/07/2022",
    status: "Completed" 
} 
const orderList = [
    {
        "id": 1,
        "userID": 1,
        "productID": 1,
        "quantityOrdered": 2,
        "orderDate": "20/07/2022",
        "status": "Completed"
    },
    {
        "id": 2,
        "userID": 1,
        "productID": 2,
        "quantityOrdered": 1,
        "orderDate": "22/07/2022",
        "status": "Shipped"
    },
    {
        "id": 3,
        "userID": 1,
        "productID": 1,
        "quantityOrdered": 3,
        "orderDate": "26/07/2022",
        "status": "Pending"
    }
]


const user = userEvent.setup();

describe("Testing the booking component", () => {
    // Creating a mock function for dispatch
    const dispatch = jest.fn()
    const store = {eventList, orderList, loggedInUser, productList}
    const component = render(
    <Router>
        <StateContext.Provider value={{store,dispatch}}>
            <UserBooking booking={testBooking}/>
            <UserOrders />
        </StateContext.Provider>
    </Router>
    );
    it("Test to see the component mounts correctly", () => {
        // Select the cancel booking button
        expect(component).toBeDefined()
    })
    it("tests that a function is fired on the button click", async () => {
        const mockCBFN = jest.fn()
        const {getByTestId} = render(<button onClick={mockCBFN} id="cancelButton" data-testid="cancelButton">Cancel Booking</button>)
        fireEvent.click(getByTestId('cancelButton'))   
        expect(mockCBFN).toHaveBeenCalledTimes(1)
    })
    it("removes an event from the list when the CB function is called", () => {
        function cancelBooking(id){
            const index = eventList.filter(event => event.id !== id)
            return index        
        }
            expect(cancelBooking(1)).toStrictEqual([expect.objectContaining({id: 2}),expect.objectContaining({id: 3})])
            expect(cancelBooking(2)).toStrictEqual([expect.objectContaining({id: 1}),expect.objectContaining({id: 3})])
            expect(cancelBooking(3)).toStrictEqual([expect.objectContaining({id: 1}),expect.objectContaining({id: 2})])
    })    
})
describe("Testing the orders component", () => {
    it("Checking to see whether component mounts when the uses has no orders", () => {

    })
})