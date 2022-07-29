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
// Import context so that it can be used for testing
import {StateContext} from '../src/utils/stateContext'
// Import router so that navigate issue does not arise
import {BrowserRouter as Router} from 'react-router-dom';

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

const user = userEvent.setup();

describe("Testing the booking component", () => {
    // Creating a mock function for dispatch
    const dispatch = jest.fn()
    const store = {eventList}
    const component = render(
    <Router>
        <StateContext.Provider value={{store,dispatch}}>
            <UserBooking booking={testBooking}/>
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