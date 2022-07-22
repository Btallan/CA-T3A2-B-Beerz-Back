import { Navigate, Outlet } from 'react-router-dom';

// https://www.robinwieruch.de/react-router-private-routes/#:~:text=Private%20Routes%20in%20React%20Router,page%2C%20they%20cannot%20access%20it.

const ProtectedRoute = ({ageVerification}) => {
    const redirectPath = '/verification'

    if(!ageVerification){
        return <Navigate to={redirectPath} replace />
    }

    return <Outlet />
}

export default ProtectedRoute;