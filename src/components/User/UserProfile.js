import UserEvents from './UserEvents';
import UserOrders from './UserOrders';
import UserPersonalInfo from './UserPersonalInfo'
import UserTags from './UserTags';


const UserProfile = () => {

    return (
        <>
            <UserPersonalInfo />
            <UserTags />
            <UserEvents />
            <UserOrders />
        </>
    )
}

export default UserProfile;