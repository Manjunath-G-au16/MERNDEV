import React,{createContext, useReducer} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Logout from "./components/Logout";
import {initialState,reducer} from "../src/reducer/UseReducer"
import Update from "./components/Update";
import Find from "./components/Find";
import Project from "./components/Project";
import Portfolio from "./components/Protfolio/Portfolio";
import Search from "./components/Search/Search";
import SignUpIn from "./components/SignUpIn/SignUpIn"
import ContactUs from "./components/ContactUs/ContactUs"
import Hero from "./components/Hero/Hero";

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
        <Route path="/update" exact>
          <Update />
        </Route>
        <Route path="/project" exact>
          <Project />
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

  return (
    <>
      <UserContext.Provider value = {{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
        </Router>
      </UserContext.Provider>
    </>
  );
};

export default App;
