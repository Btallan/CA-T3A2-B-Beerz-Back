import { useGlobalState } from "../utils/stateContext";
import { useState } from "react";


const ContactUs = () => {
    // Import context 
    const {store,dispatch} = useGlobalState()
    // Unpack store values
    const {loggedInUser, contactMessageList} = store
    // console.log(contactMessageList)

    const initialFormData = {
        id: 0,
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
    // useEffect(() => console.log(console.log(contactMessageList)), [contactMessageList])

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
                            <label>First Name</label>
                            <input type="text" name="firstName" id="firstName" onChange={handleData} value={formData.firstName}></input>
                            <label>Last Name</label>
                            <input type="text" name="lastName" id="lastName" onChange={handleData} value={formData.lastName}></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" id="email" onChange={handleData} value={formData.email}></input>
                        </div>
                        <div>
                            <label>Mobile</label>
                            <input type="text" name="mobile" id="mobile" onChange={handleData} value={formData.mobile}></input>
                        </div>
                    </>
                }
                <div>
                    <label>Comment</label>
                    <textarea type="text" name="message" id="message" onChange={handleData} value={formData.message}/>
                </div>

                <input type="submit" value="Send It"></input>

            </form>
        </>
    )
}

export default ContactUs;