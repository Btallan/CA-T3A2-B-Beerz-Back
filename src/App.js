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


// // MATERIAL UI IMPORTS
// import Button from '@mui/material/Button';



// Import reducer
import reducer from './utils/reducer'

// Import state context
import {StateContext} from './utils/stateContext'

// Import CSS
import '../src/css/styles.css'

// APIs
// import { getProducts } from './services/productsServices'
// import { getUsers } from './services/usersServices'
// import { getReviews } from './services/reviewsServices'
// import { getEvents } from './services/eventsServices'
// import { getBookings } from './services/bookingsServices'
// import { getTags } from './services/tagsServices'
// import { getOrders } from './services/ordersServices'
// import { getContacts } from './services/contactsServices'

const App = () => {
  // Set initial states
  const initialState = {
    loggedInUser: sessionStorage.getItem("username") || null,
    ageVerification: "",
    authToken: sessionStorage.getItem("token") || null
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

    // // Products API
    // getProducts()
    //   .then(products => {
    //     dispatch({
    //       type: 'setProductList',
    //       data: products
    //     })
    //   })
    //   .catch(e => console.log(e))

    // // Users API
    // getUsers()
    //   .then(users => {
    //     dispatch({
    //       type: 'setUserList',
    //       data: users
    //     })
    //   })
    //   .catch(e => console.log(e))

    // // Reviews API
    // getReviews()
    //   .then(reviews => {
    //     dispatch({
    //       type: 'setReviewList',
    //       data: reviews
    //     })
    //   })
    //   .catch(e => console.log(e))

    // // Events API
    // getEvents()
    //   .then(events => {
    //     dispatch({
    //       type: 'setEventList',
    //       data: events
    //     })
    //   })
    //   .catch(e => console.log(e))

    // // Bookings API
    // getBookings()
    //   .then(bookings => {
    //     dispatch({
    //       type: 'setBookingList',
    //       data: bookings
    //     })
    //   })
    //   .catch(e => console.log(e))

    // // Tags API
    // getTags
    //   .then(tags => {
    //     dispatch({
    //       type: 'setTagList',
    //       data: tags
    //     })
    //   })
    //   .catch(e => console.log(e))
        
    // // Orders API
    // getOrders()
    //   .then(orders => {
    //     dispatch({
    //       type: 'setOrderList',
    //       data: orders
    //     })
    //   })
    //   .catch(e => console.log(e))

    // // Contact API
    // getContacts
    //   .then(contacts => {
    //     dispatch({
    //       type: 'setContactMessageList',
    //       data: contacts
    //     })
    //   })
    //   .catch(e => console.log(e))


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
                <Route path='/products/:id/*' element={<ProductDetails />} />
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
            <div style={{height: "40px"}}></div>
            <Footer />
          </Router>
        </StateContext.Provider>
    </div>
  )
}

export default App
