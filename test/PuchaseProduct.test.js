//
//Failing because there are not tests in thise suite, moved on to start material UI will come back to test the APIS
//

// /**
//  * @jest-environment jsdom
//  */

// // import dependencies
// import React, {Component} from 'react';
// // Import user-event methods
// import userEvent from '@testing-library/user-event'
// // import react-testing methods
// import { fireEvent, render, screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'

// // Import the purchasing component
// import PurchaseProduct from '../src/components/User/UserBooking';


// // Import context so that it can be used for testing
// import {StateContext} from '../src/utils/stateContext'
// // Import router so that navigate issue does not arise
// import {BrowserRouter as Router} from 'react-router-dom';

// // Import data
// import eventList from '../src/data/event-list.json'
// import bookingList from '../src/data/booking-list.json'



// // //
// // // User Info
// // //
// const loggedInUser = {
//     id: 4,
//     firstName: "Ben",
//     lastName: "Allan",
//     email: "ben@email.com",
//     mobile: "0488547788",
//     username: "btallan",
//     dob: "29/10/1995",
//     password: "123456",
//     profileIMG: "https://scontent.fbne6-1.fna.fbcdn.net/v/t1.18169-9/14039945_1151143301617696_46751634297372470_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=riy08V6YREQAX9b6YTL&_nc_oc=AQkcsSH4EFnuaO8VVho7bHe8iF-XHa9077p8yuNY940lpo02hkRUSSeM9HGIi3zuWpDByXPnqZXBmJ190uYl3QrJ&tn=hPx2voBG9KtjgKTn&_nc_ht=scontent.fbne6-1.fna&oh=00_AT9LNlmsmgGfEwI525HAJWdvPe1SDrxrb76c47Na0UL0OQ&oe=6300BF31",
//     flavourTags: [1,3,4],
//     address: "12 Pelican Ave, Burleigh Heads, 4220, QLD "
// }

// const booking =     {
//     "id": 1,
//     "eventID": 1,
//     "userID": 1,
//     "quantity": 4,
//     "status": false
// }

// const user = userEvent.setup();

// describe("Testing the orders component", () => {
//         // Creating a mock function for dispatch
//     const dispatch = jest.fn()
//     const store = {loggedInUser, eventList, bookingList}
//     const component = render(
//     <Router>
//         <StateContext.Provider value={{store,dispatch}}>
//             <PurchaseProduct />
//         </StateContext.Provider>
//     </Router>
//     );
//     it("Checking to see whether component mounts when the uses has no orders", () => {       
//         expect(component).toBeDefined()
//     })
// })
