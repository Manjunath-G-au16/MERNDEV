import React, { createContext, useReducer, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Logout from "./components/Logout";
import { initialState, reducer } from "../src/reducer/UseReducer";
import Portfolio from "./components/Protfolio/Portfolio";
import Search from "./components/Search/Search";
import SignUpIn from "./components/SignUpIn/SignUpIn";
import ContactUs from "./components/ContactUs/ContactUs";
import Hero from "./components/Hero/Hero";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./App.css"

//Context
//--------
export const UserContext = createContext();
const Routing = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/signin" exact>
          <SignUpIn />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  );
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
    { loading ?  <div className="loaderx"> <div className="load"> <ClimbingBoxLoader


 color={"#fff"} loading={loading}  size={30}  /></div></div> :

      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
        </Router>
      </UserContext.Provider>
    }
    </>
  );
};

export default App;
