import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"
import Providers from "./components/pageContent/Providers"
import Patients from "./components/pageContent/Patients"
import Contact from "./components/form/Contact"
import Register from "./components/account/Register"
import Login from "./components/account/Login"
import Booking from "./components/form/book/Booking"
import Lang from "./components/form/book/Lang"
import Checkout from "./components/checkout/Checkout"



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePages} />
          <Route path='/Providers' exact component={Providers} />
          <Route path='/Patients' exact component={Patients} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Register' exact component={Register} />
          <Route path='/Login' exact component={Login} />
          <Route path='/Booking' exact component={Booking} />
          <Route path='/Lang' exact component={Lang} />
          <Route path='/Checkout' exact component={Checkout} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
