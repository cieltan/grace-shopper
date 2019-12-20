import React from 'react'
import {Navbar, AllRice} from './components'
import Routes from './routes'
import {Switch, Route} from 'react-router-dom'
import SingleRice from './components/SingleRice'
import Cart from './components/Cart'
import AllOrders from './components/AllOrders'
import SingleOrder from './components/SingleOrder'
import OrderCheckout from './components/OrderCheckout'
const App = () => {
  return (
    <div className="app--container">
      <Navbar />
      <Routes />
      <Switch>
        <Route exact path="/allproducts" component={AllRice} />
        <Route exact path="/allproducts/:riceId" component={SingleRice} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/orders" component={AllOrders} />
        <Route exact path="/orders/:id" component={SingleOrder} />
        <Route exact path="/orderCheckout/:id" component={OrderCheckout} />
        <Route path="/" component={AllRice} />
      </Switch>
    </div>
  )
}

export default App
