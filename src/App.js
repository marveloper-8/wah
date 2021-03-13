// packages
import React, {createContext, useReducer, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store1'
// style
import './App.css';
import './responsiveness.css'
// pages
import BadRequest from './pages/BadRequest'
import Home from './pages/Home'
// pages -- authentication
import Authentication from './pages/Authentication'
// pages -- profile
import Account from './pages/Account'
//pages -- marketplace
import Market from './pages/Market'
import ProductDetails from './pages/Market/Details'
import Favourites from './pages/Market/Favourites'
import Cart from './pages/Market/Cart'
import Checkout from './pages/Market/Checkout'
// widgets
import Navigation from './widgets/Navigation'
// import Footer from './widgets/Footer'
// extras
import {reducer, initialState} from './reducers/userReducer'
export const UserContext = createContext()

const Routing = () => {
  // const {dispatch} = useContext(UserContext)

  return(
    <Switch>
      <Route exact path='/' component={Home} />
      {/* authentication */}
      <Route exact path='/authentication' component={Authentication} />
      {/* profile */}
      <Route exact path='/account' component={Account} />
      {/* marketplace */}
      <Route exact path='/market' component={Market} />
      <Route exact path='/product-details' component={ProductDetails} />
      <Route exact path='/favourites' component={Favourites} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/checkout' component={Checkout} />
      {/* bad request */}
      <BadRequest />
    </Switch>
  )
}

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    if(user){
      dispatch({type: "USER", payload: user})
    }
  }, [])
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <Router>
        <Navigation />
        {/* {user ? <Navigation /> : ''} */}
        <Routing />
        {/* {user ? <Footer /> : ''} */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
