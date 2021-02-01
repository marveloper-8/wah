// packages
import React, {createContext, useReducer, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// style
import './App.css';
import './responsiveness.css'
// pages
import BadRequest from './pages/BadRequest'
import Home from './pages/Home'
// pages -- authentication
// pages -- profile
//pages -- properties
// widgets
import Navigation from './widgets/Navigation'
import Footer from './widgets/Footer'
// extras
import {reducer, initialState} from './reducers/userReducer'
export const UserContext = createContext()

const Routing = () => {
  // const {dispatch} = useContext(UserContext)

  return(
    <Switch>
      <Route exact path='/' component={Home} />
      {/* authentication */}
      {/* profile */}
      {/* properties */}
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
  })
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
        <Router>
          {/* <Navigation /> */}
          {/* {user ? <Navigation /> : ''} */}
          <Routing />
          {/* {user ? <Footer /> : ''} */}
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
