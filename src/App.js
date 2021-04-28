// packages
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import { getMe } from "./redux/actions/user";
import { store } from "./redux/store";
// style
import './App.css';
import './responsiveness.css'
// pages
import BadRequest from './pages/BadRequest'
import Home from './pages/Home'
import UnauthenticatedRoute from './utils/UnauthenticatedRoute'
import AuthenticatedRoute from './utils/AuthenticatedRoute'
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
      <Route path='/account' component={Account} />
      {/* marketplace */}
      <AuthenticatedRoute path='/market' component={Market} />
      <AuthenticatedRoute path='/product-details/:id' component={ProductDetails} />
      <AuthenticatedRoute path='/favourites' component={Favourites} />
      <AuthenticatedRoute path='/cart' component={Cart} />
      <AuthenticatedRoute path='/checkout' component={Checkout} />
      {/* bad request */}
      <BadRequest />
    </Switch>
  )
}

const App = () => {
  useEffect(() => {
    if (store.getState().user.authUser.isLoggedIn) store.dispatch(getMe());
  });
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
