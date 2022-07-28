/**
 * @jest-environment jsdom
 */

// import dependencies
import React, {Component} from 'react';

// import userEvent from '@testing-library/user-event'
// import react-testing methods
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import UserBooking from '../src/components/User/UserBooking';
import {StateContext} from '../src/utils/stateContext'

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
    }
]

test("Can the component load", () => {
    const dispatch = jest.fn()
    const store = {eventList}
    const {queryByTestId} = render(
    <Router>
        <StateContext.Provider value={{store,dispatch}}>
            <UserBooking booking={testBooking}/>
        </StateContext.Provider>
    </Router>
    );
    const cancelButton = screen.queryByTestId('cancelButton')
    expect(cancelButton).toBeDefined()
});
 