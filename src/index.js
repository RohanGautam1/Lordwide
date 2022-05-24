import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './component/SignIn';
import Signup from './component/Signup';
import Chartbar1 from './component/Chartbar1';
// import Test from './component/Test'
import Forgot from "./component/Forgot"
import { LineChart } from 'recharts';
// import Sidebar from "./component/Sidebar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>

<Route path='/' element={<App/>} />
<Route path='/Signin' element={<SignIn/>} />
<Route path="/Signup" element={<Signup/>} />
<Route path="/Forgot" element={<Forgot/>} />
<Route />

      </Routes>
    </Router> */}





    {/* <Test /> */}
    
    {/* <Signup></Signup> */}
    {/* <SignIn></SignIn> */}
  
    {/* <Forgot></Forgot> */}
    {/* <Sidebar></Sidebar> */}
{/* <Chartbar1/> */}
{/* <LineChart></LineChart> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
