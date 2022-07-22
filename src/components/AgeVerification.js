import { useGlobalState } from '../utils/stateContext'
import {useNavigate} from 'react-router-dom'



const AgeVerification = () => {
        // Calling dispatch into the component, so that we can update the global state
        const {dispatch} = useGlobalState();
        // const {ageVerification} = store

        const navigate = useNavigate();

        const updateAgeVerification = (event) => {
            event.preventDefault();
            if(event.target.value === 'Yes'){
                dispatch({
                    type: 'setAgeVerification',
                    data: true
                })
                navigate('/')
            } else {
                dispatch({
                    type: 'setAgeVerification',
                    data: false
                })
            }
            // console.log(ageVerification)
        }

    return (
        <>
            <h1>Welcome to Beerz</h1>
            <p>Are you over the age of 18?</p>
            <form >
                <input type="submit" value="Yes" onClick={updateAgeVerification}/>
                <input type="submit" value="No" onClick={updateAgeVerification}/>
            </form>
        </>
    )
}

export default AgeVerification;