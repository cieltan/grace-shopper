import React from 'react'
import AllRice from './components/all-rice'
import {Navbar} from './components'
import Routes from './routes'
import {Switch, Route} from 'react-router-dom'
import SingleRice from './components/single-rice'
import Cart from './components/cart'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Switch>
        <Route exact path='/allproducts' component={AllRice} />
        <Route exact path='/allproducts/:riceId' component={SingleRice} />
        <Route exact path='/cart' component={Cart} />
        <Route path='/' component={AllRice} />
      </Switch>
    </div>
  )
}

export default App
