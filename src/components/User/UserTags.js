// Import global states
import { useGlobalState } from '../../utils/stateContext'

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
            event.target.style.backgroundColor = "green"           
            event.target.style.color = "white"
            // console.log(userFlavourTags)
            dispatch({
                type: "updateUserFlavourTags",
                data: userFlavourTags
            })
         
        } else {
            var indexOfFlavour = userFlavourTags.indexOf(parseInt(flavourID))
            // console.log(indexOfFlavour)
            userFlavourTags.splice(indexOfFlavour,1)
            event.target.style.backgroundColor = ""           
            event.target.style.color = "black"
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
            <h1>User Flavour Tags</h1>
            {tagList.map(tag =>  
                loggedInUser.flavourTags.includes(tag.id)?
                    <button key={tag.id} onClick={onClick} value={tag.id} style={{color: "white", backgroundColor: "green"}}>{tag.tag}</button>
                    :    
                    <button key={tag.id} onClick={onClick} value={tag.id} >{tag.tag}</button>
            )}        
        </>
    )
}

export default UserTags;