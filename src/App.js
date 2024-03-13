import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home1 from './Components/Home/Home1'
import Booking from './Components/Booking/Booking'
import AboutUs from './Components/AboutUs/AboutUs'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import ContactUs from './Components/ContactUs/ContactUs'
import Boooking from './Components/Boooking/Boooking'
import PaymentForm from './Components/Payment/PaymentForm'
import TransactionSuccess from './Components/Payment/TransactionSuccess'
import ProductCards from './Components/Boooking/Food'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Nav/>}>
            <Route index element={<Home1/>}/>
            <Route path='/Home' element={<Home1/>}/>
            <Route path='/BookTickets' element={<Booking/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/LogIn' element={<Login/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/Seats' element={<Boooking/>}/>
            <Route path='/Food' element={<ProductCards/>}/>
            <Route path='/Payment' element={<PaymentForm/>}/>
            <Route path='/Thankyou' element={<TransactionSuccess/>}/>
            

        </Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App