import React from 'react';

import UserEvents from './UserEvents';
import UserOrders from './UserOrders';
import UserPersonalInfo from './UserPersonalInfo'
import UserTags from './UserTags';


// MATERIAL UI IMPORTS
import {Container} from '@mui/material'


const UserProfile = () => {

    return (
        <>

                <Container>
                    <UserPersonalInfo />
                    <UserTags />
                    <UserEvents />
                    <UserOrders />
                    <div style={{margin: "200px 0"}}></div>
                </Container>

        </>
    )
}

export default UserProfile;