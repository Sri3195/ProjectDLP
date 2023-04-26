import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './Products';
import Personalloan from './Personalloan';
import PersonalLoanOne from './PersonalLoanOne';
import PersonalLoanTwo from './PersonalLoanTwo';
import PersonalLoanThree from './PersonalLoanThree';
import PersonalLoanFour from './PersonalLoanFour';
import PersonalLoanFive from './PersonalLoanFive';
import PersonalLoanSix from './PersonalLoanSix';
import PersonalLoanSeven from './PersonalLoanSeven';
import PersonalloanFinal from './PersonalloanFinal';
import VehicleloanOne from './VehicleloanOne';
import VehicleloanTwo from './VehicleloanTwo';
import VehicleloanThree from './VehicleloanThree';
import VehicleloanFour from './VehicleloanFour';
import VehicleloanFive from './VehicleloanFive';
import VehicleloanSix from './VehicleloanSix';
import VehicleloanSeven from './VehicleloanSeven';
import VehicleloanFinal from './VehicleloanFinal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<App/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/personal-loan" element={<Personalloan/>}/>
      <Route path="/personal-loan-step-one" element={<PersonalLoanOne/>}/>
      <Route path="/personal-loan-step-two" element={<PersonalLoanTwo/>}/>
      <Route path="/personal-loan-step-three" element={<PersonalLoanThree/>}/>
      <Route path="/personal-loan-step-four" element={<PersonalLoanFour/>}/>
      <Route path="/personal-loan-step-five" element={<PersonalLoanFive/>}/>
      <Route path="/personal-loan-step-six" element={<PersonalLoanSix/>}/>
      <Route path="/personal-loan-step-seven" element={<PersonalLoanSeven/>}/>
      <Route path="/personal-loan-step-final" element={<PersonalloanFinal/>}/>
      <Route path="/vehicle-loan-step-one" element={<VehicleloanOne/>}/>
      <Route path="/vehicle-loan-step-two" element={<VehicleloanTwo/>}/>
      <Route path="/vehicle-loan-step-three" element={<VehicleloanThree/>}/>
      <Route path="/vehicle-loan-step-four" element={<VehicleloanFour/>}/>
      <Route path="/vehicle-loan-step-five" element={<VehicleloanFive/>}/>
      <Route path="/vehicle-loan-step-six" element={<VehicleloanSix/>}/>
      <Route path="/vehicle-loan-step-seven" element={<VehicleloanSeven/>}/>
      <Route path="/vehicle-loan-step-final" element={<VehicleloanFinal/>}/>
     </Routes> 
    </BrowserRouter>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
