import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';
import PhoneNumber from './PhoneNumber';

import PersonalloanBankAccount from './components/personal-loan/BankAccount';
import  PersonalloanCompany from './components/personal-loan/Company';
import PersonalloanEmploymentType from './components/personal-loan/EmploymentType';
import PersonalloanIncome from './components/personal-loan/Income';
import PersonalloanLoanAmount from './components/personal-loan/LoanAmount';
import PersonalloanLoanSuccess from './components/personal-loan/LoanSuccess';
import PersonalloanResidenceCity from './components/personal-loan/ResidenceCity';
import PersonalloanResidenceType from './components/personal-loan/ResidenceType';
import VehicleloanBrandType from './components/auto-loan/BrandType';
import VehicleloanEmploymentType from './components/auto-loan/EmploymentType';
import VehicleloanLoanAmount from './components/auto-loan/LoanAmount';
import VehicleloanLoanPeriod from './components/auto-loan/LoanPeriod';
import VehicleloanLoanSuccess from './components/auto-loan/LoanSuccess';
import VehicleloanResidingCity from './components/auto-loan/ResidingCity';
import VehicleloanTimePeriod from './components/auto-loan/TimePeriod';
import VehicleloanVehicleType from './components/auto-loan/VehicleType';
import PersonalloanPersonalDetails from './components/personal-loan/PersonalDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<App/>}/>
      <Route path="/phone-number" element={<PhoneNumber/>}/>
      <Route path="/personal-loan-emp-type" element={<PersonalloanEmploymentType/>}/>
      <Route path="/personal-loan-bank-account" element={<PersonalloanBankAccount/>}/>
      <Route path="/personal-loan-company" element={<PersonalloanCompany/>}/>
      <Route path="/personal-loan-income" element={<PersonalloanIncome/>}/>
      <Route path="/personal-loan-loan-amount" element={<PersonalloanLoanAmount/>}/>
      <Route path="/personal-loan-loan-success" element={<PersonalloanLoanSuccess/>}/>
      <Route path="/personal-loan-personal-details" element={<PersonalloanPersonalDetails/>}/>
      <Route path="/personal-loan-residence-city" element={<PersonalloanResidenceCity/>}/>
      <Route path="/personal-loan-residence-type" element={<PersonalloanResidenceType/>}/>
      <Route path="/vehicle-loan-brand-type" element={<VehicleloanBrandType/>}/>
      <Route path="/vehicle-loan-emp-type" element={<VehicleloanEmploymentType/>}/>
      <Route path="/vehicle-loan-loan-amount" element={<VehicleloanLoanAmount/>}/>
      <Route path="/vehicle-loan-loan-success" element={<VehicleloanLoanSuccess/>}/>
      <Route path="/vehicle-loan-residing-city" element={<VehicleloanResidingCity/>}/>
      <Route path="/vehicle-loan-time-period" element={<VehicleloanTimePeriod/>}/>
      <Route path="/vehicle-loan-vehicle-type" element={<VehicleloanVehicleType/>}/>
      <Route path="/vehicle-loan-loan-period" element={<VehicleloanLoanPeriod/>}/>
     </Routes> 
    </BrowserRouter>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
