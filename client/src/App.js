import React from "react";
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

function App() {
  return (
    <>
      <Router>
      <Navbar />
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
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
