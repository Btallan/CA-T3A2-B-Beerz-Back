// Import global states
import { useGlobalState } from '../../utils/stateContext'

// MATERIAL UI IMPORTS
import {Button, Typography, Container, Card} from '@mui/material'

const UserTags = () => {
    // Calling dispatch into the component, so that we can update the global state
    const {store,dispatch} = useGlobalState();
    // Unpack the store
    // Import the available tags
    const {tagList, loggedInUser} = store
    // console.log(tagList)

    // Function which is actioned for each item that the user selects
    // This will either add the tag or remove the tag
    var userFlavourTags = loggedInUser.flavourTags
    // console.log(userFlavourTags)
    const onClick = (event) => {
        // console.log(event.target.value)
        const flavourID = event.target.value
        // console.log(flavourID)
        // console.log(userFlavourTags.includes(parseInt(flavourID)))
        
        if(!userFlavourTags.includes(parseInt(flavourID))){            
            userFlavourTags.push(parseInt(flavourID))
            // console.log(userFlavourTags)
            dispatch({
                type: "updateUserFlavourTags",
                data: userFlavourTags
            })
         
        } else {
            var indexOfFlavour = userFlavourTags.indexOf(parseInt(flavourID))
            // console.log(indexOfFlavour)
            userFlavourTags.splice(indexOfFlavour,1)
            // console.log(userFlavourTags)
            dispatch({
                type: "updateUserFlavourTags",
                data: userFlavourTags
            })
        }
    }
    // console.log(loggedInUser.flavourTags)

    return (
        <>
            <div style={{margin: "50px 0"}}></div>
            <Container> 
                <Typography variant='h4' style={{textAlign: 'center', color: 'white'}}>User Flavour Tags</Typography>

                <Card style={{textAlign: 'center', padding: "20px 0"}}>                    
                    {tagList.map(tag =>  
                        loggedInUser.flavourTags.includes(tag.id)?
                            <Button variant='contained' key={tag.id} onClick={onClick} value={tag.id} style={{margin: '10px', padding: '20px'}} className='tagButtons'>{tag.tag}</Button>
                            :    
                            <Button variant='outlined' key={tag.id} onClick={onClick} value={tag.id} style={{margin: '10px', padding: '20px'}} className='tagButtons'>{tag.tag}</Button>
                    )}       
                </Card>
                
            </Container> 
        </>
    )
}

export default UserTags;

