// Importing packages
import React, {useEffect, useReducer} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Import misc components
import AgeVerification from './components/AgeVerification'
import Home from './components/Home'
import UserProfile from './components/User/UserProfile'
import SignUp from './components/SignUpForm'
import LogIn from './components/LogInForm'
import Navigation from './components/Navigation'
import About from './components/About'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import VerificationNavigation from './components/VerificationNavigation'
import ContactUs from './components/ContactUs'

// Import products components
import Products from './components/Product/Products'
import ProductDetails from './components/Product/ProductDetails'
import AddReview from './components/Product/AddReview'

// Import event components
import EventDetails from './components/Event/EventDetails'

// Import User components
import EditUserProfile from './components/User/EditUserProfile'



// Import Data
import initialProductList from './data/product-list.json'
import initialUserList from './data/user-list.json'
import initialReviewList from './data/review-list.json'
import initialEventList from './data/event-list.json'
import initialBookingList from './data/booking-list.json'
import initialTagList from './data/tag-list.json'
import initialOrderList from './data/order-list.json'
import initialContactMessageList from './data/contactMessages-list.json'

// Import reducer
import reducer from './utils/reducer'

// Import state context
import {StateContext} from './utils/stateContext'

const App = () => {
  // Set initial states
  const initialState = {
    loggedInUser: "",
    ageVerification: ""
  }

  // Initialising the reducer
  const [store, dispatch] = useReducer(reducer, initialState)

  // Unpacking the store
  const {ageVerification} = store

  // Initialising the data which must be present on load
  useEffect(() => {
    // Importing the products list
    dispatch({
      type: 'setProductList',
      data: initialProductList
    })
    // Importing the users list
    dispatch({
      type: 'setUserList',
      data: initialUserList
    })
    // Importing the reviews list
    dispatch({
      type: 'setReviewList',
      data: initialReviewList
    })
    // Importing the events list
    dispatch({
      type: 'setEventList',
      data: initialEventList
    })
    // Importing the bookings list
    dispatch({
      type: 'setBookingList',
      data: initialBookingList
    })
    // Importing the tags list
    dispatch({
      type: 'setTagList',
      data: initialTagList
    })
    // Importing the orders list
    dispatch({
      type: 'setOrderList',
      data: initialOrderList
    })
    // Importing the contact message list
    dispatch({
      type: 'setContactMessageList',
      data: initialContactMessageList
    })
    // console.log(initialBookingList)
    // console.log(initialReviewList)
  },[])

  return (
    <div >
        {/* {console.log(loggedInUser)}       */}
        <StateContext.Provider value={{store,dispatch}}>          
          <Router>

            {!ageVerification ? 
              <VerificationNavigation />
            :
              <Navigation />
            }       
                   
            <Routes>
              {/* Age verification loads initially, if this is true then homepage loads */}

              {/* Routes open to the public */}
              <Route path='/verification' element={<AgeVerification />} />
              <Route path='/login' element={<LogIn />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact/*" element={<ContactUs />} />

              {/* Routes available after age verification */}
              <Route element={<ProtectedRoute ageVerification={ageVerification}/>}> 
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/events/:id' element={<EventDetails />} />
              </Route>

              {/* Routes where you need to be a user */}
              <Route element={<ProtectedRoute ageVerification={ageVerification}/>}> 
                <Route path='/:username' element={<UserProfile />} />
                <Route path='/:username/edit' element={<EditUserProfile />} />
                <Route path='/add-review/:id' element={<AddReview/>} ></Route>
              </Route>
              
              {/* Use the '*' to redirect all other routes to the NotFound component */}
              <Route path="*" element={<NotFound />} />
              
            </Routes>
            <Footer />
          </Router>
        </StateContext.Provider>
    </div>
  )
}

export default App
