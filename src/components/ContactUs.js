import { useGlobalState } from "../utils/stateContext";
import { useState, useEffect } from "react";

// MATERIAL UI IMPORTS
import {Button, TextField,InputLabel} from '@mui/material'


const ContactUs = () => {
    // Import context 
    const {store,dispatch} = useGlobalState()
    // Unpack store values
    const {loggedInUser, contactMessageList} = store
    // console.log(contactMessageList)

    // Store the URL
    const url = window.location.href

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
        matter: objectName ? objectName : "Enquiry",
        matterID: objectID ? parseInt(objectID) : this.id,
        userID: loggedInUser? loggedInUser.id : 0,
        firstName: loggedInUser? loggedInUser.firstName : "",
        lastName: loggedInUser? loggedInUser.lastName : "",  
        email: loggedInUser? loggedInUser.email : "",
        mobile: loggedInUser? loggedInUser.mobile : "",
        message: ""
    }
    // console.log(initialFormData)

    // Initial state 
    const [formData, setFormData] = useState(initialFormData)

  
    const handleData = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            id: nextID(contactMessageList),
            [event.target.name]: event.target.value
        })
    }
    useEffect(() => console.log(formData),[formData])

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
            <form onSubmit={handleSubmit}>
                {loggedInUser? 
                    null 
                :
                    <>
                        <div>
                            <InputLabel>First Name</InputLabel>
                            <TextField type="text" name="firstName" id="firstName" onChange={handleData} value={formData.firstName}></TextField>
                            <InputLabel>Last Name</InputLabel>
                            <TextField type="text" name="lastName" id="lastName" onChange={handleData} value={formData.lastName}></TextField>
                        </div>
                        <div>
                            <InputLabel>Email</InputLabel>
                            <TextField type="email" name="email" id="email" onChange={handleData} value={formData.email}></TextField>
                        </div>
                        <div>
                            <InputLabel>Mobile</InputLabel>
                            <TextField type="text" name="mobile" id="mobile" onChange={handleData} value={formData.mobile}></TextField>
                        </div>
                    </>
                }
                <div>
                    <InputLabel>Comment</InputLabel>
                    <TextField type="text" name="message" id="message" onChange={handleData} value={formData.message} multiline rows={5} />

                </div>
                <Button type="submit" variant="contained">Send It</Button>


            </form>
        </>
    )
}

export default ContactUs;