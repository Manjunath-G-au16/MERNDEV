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

//Context
//--------
export const UserContext = createContext();
const Routing = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/contact" exact>
          <Contact />
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
