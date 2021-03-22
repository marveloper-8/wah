// packages
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import {loadUser} from './redux/actions/actionsAuth'
// style
import './App.css';
import './responsiveness.css'
// pages
import BadRequest from './pages/BadRequest'
import Home from './pages/Home'
import UnauthenticatedRoute from './pages/Unauthenticated'
import AuthenticatedRoute from './pages/Authenticated'
// pages -- authentication
import Authentication from './pages/Authentication'
import Signup from './pages/Authentication/Signup'
import Login from './pages/Authentication/Login'
// pages -- profile
import Account from './pages/Account'
//pages -- marketplace
import Market from './pages/Market'
import ProductDetails from './pages/Market/Details'
import Favourites from './pages/Market/Favourites'
import Cart from './pages/Market/Cart'
import Checkout from './pages/Market/Checkout'
// extras

const Routing = () => {

  return(
    <Switch>
      <Route exact path='/' component={Home} />
      {/* authentication */}
      <Route path='/authentication' component={Authentication} />
      <UnauthenticatedRoute path='/signup' component={Signup} />
      <UnauthenticatedRoute path='/login' component={Login} />
      {/* profile */}
      <AuthenticatedRoute path='/account' component={Account} />
      {/* marketplace */}
      <Route path='/market' component={Market} />
      <Route path='/product-details' component={ProductDetails} />
      <Route path='/favourites' component={Favourites} />
      <Route path='/cart' component={Cart} />
      <Route path='/checkout' component={Checkout} />
      {/* bad request */}
      <BadRequest />
    </Switch>
  )
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  console.log(localStorage.getItem('token'))
  return <Provider store={store}>
      <div className="App">
      <Router>
        <Routing />
      </Router>
    </div>
  </Provider>
  
}

export default App;
