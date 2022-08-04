import { useGlobalState } from "../utils/stateContext";
import { useState, useEffect } from "react";

// MATERIAL UI IMPORTS
import {Button, TextField, Container, Card} from '@mui/material'

const ContactUs = () => {
    // Import context 
    const {store,dispatch} = useGlobalState()
    // Unpack store values
    const {loggedInUser, contactMessageList} = store
    
    // console.log("User")
    // console.log(loggedInUser)

    // Store the URL
    const url = window.location.href
    // console.log(url)

    // split the url up
    var urlSplits = url.split('/')
    var urlSplitsItems = urlSplits.length
    // console.log(urlSplitsItems)
    
    // get the last item in the array
    var objectID = urlSplits[urlSplitsItems - 1]
    // console.log(objectID)
    // slice end of url for object type
    var objectName = urlSplits[urlSplitsItems - 2]
    // console.log(objectName)

    const initialFormData = {
        id: 0,
        matter: "Enquiry",
        matterID: 0,

        userID: loggedInUser? loggedInUser.id : 0,
        firstName: loggedInUser? loggedInUser.firstName : "",
        lastName: loggedInUser? loggedInUser.lastName : "",  
        email: loggedInUser? loggedInUser.email : "",
        mobile: loggedInUser? loggedInUser.mobile : "",
        message: ""
    }

    // Initial state 
    const [formData, setFormData] = useState(initialFormData)

    if(objectName === 'contact'){
        var matterName = 'Eqnuiry'
    } else if(objectName === 'events'){
        var matterName = 'Event'
    } else if(objectName === 'order'){
        var matterName = 'Order'
    }else{
        var matterName = 'Eqnuiry'
    }

    if(objectID === 'contact'){
        objectID = 0;
    }


    // console.log(initialFormData)
  
    const handleData = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            matter: matterName,
            matterID: objectID,
            id: nextID(contactMessageList),
            [event.target.name]: event.target.value
        })
    }
    // useEffect(() => console.log(formData),[formData])

    const clearMessage = () => {
        setFormData(initialFormData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        if(formData.message === "" || formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.mobile === ""){
            console.log("Missing information")
        } else {        
            dispatch({
                type: "addContactMessage",
                data: formData
            })          
            clearMessage()
        }
    }
    useEffect(() => console.log(console.log(contactMessageList)), [contactMessageList])

    function nextID(data){
        // first exclude the empty case
        if(data.length === 0) return ;
        // second handle if data not empty
        const sortData = data.sort((a,b) => a.id - b.id);
        const nextID = sortData[sortData.length -1].id +1
        return nextID 
    }

    return (
        <>
            <Container>
                <Card className='welcomeCards'>
                    <form onSubmit={handleSubmit}>
                        {loggedInUser? 
                            null 
                        :
                            <>                                
                                <div className='shortInputDiv'>
                                    <div className='textFieldInputShort textFieldInputShortINDV'>
                                        <TextField fullWidth  label='First Name' type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleData} className='textFieldInputColour'></TextField>
                                    </div>
                                    <div className='textFieldInputShort'>
                                        <TextField fullWidth  label='Last Name' type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleData} className='textFieldInputColour'></TextField>
                                    </div>
                                </div>  

                                <div className='textFieldInputLong'>
                                    <TextField fullWidth label='Email' type="email" name="email" id="email" value={formData.email} onChange={handleData} className='textFieldInputColour'></TextField>
                                </div>

                                <div className='textFieldInputLong'>
                                    <TextField fullWidth  label='Mobile' type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleData} className='textFieldInputColour'></TextField>
                                </div>

                            </>
                        }
                        <div className='textFieldInputLong'>
                            <TextField label='Comment' type="text" name="message" id="message" onChange={handleData} value={formData.message} multiline fullWidth rows={5} className='textFieldInputColour'/>

                        </div>
                        <Button type="submit" variant="contained">Send It</Button>


                    </form>
                </Card>
            </Container>
        </>
    )
}

export default ContactUs;