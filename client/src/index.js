import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero/Hero.js';
import Demo from './components/Hero/Demo.js';
import Sec2 from './components/Hero/Sec2';
import Sec2Resp from './components/Hero/Sec2Resp';
import Portfolio from './components/Protfolio/Portfolio';
import SignUpIn from './components/SignUpIn/SignUpIn';
import ContactUs from './components/ContactUs/ContactUs';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Hero /> */}
    {/* <Demo /> */}
    {/* <Sec2 /> */}
    {/* <Sec2Resp /> */}
    {/* <Portfolio /> */}
    {/* <SignUpIn /> */}
    {/* <ContactUs /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
