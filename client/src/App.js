import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import HomePage from './components/homePage/HomePage';
import AccountInfo from './components/personalAccount/AccountInfo';
import CorporateAccInfo from './components/corporateAccount/CorporateAccInfo';
import AgencyAccInfo from './components/agencyAccount/AgencyAccInfo'

import BusinessDetails from './components/personalAccount/BusinessDetails';
import CardDetails from './components/personalAccount/CardDetails';
import CorporateBusiness from './components/corporateAccount/CorporateBussiness';
import CorporateCard from './components/corporateAccount/CorporateCard';
import AgencyBusiness from './components/agencyAccount/AgencyBusiness';
import AgencyCard from './components/agencyAccount/AgencyCard';
import Completed from './components/Completed';
import LoginPage from './components/extraPages/LoginPage';
import ResetPassword from './components/extraPages/ResetPassword';
import Login from './components/extraPages/Login';
import ForgotPassword from './components/extraPages/ForgotPassword';
import UserProfile from './components/profile pages/UserProfile';
import VerifiedEmail from './components/extraPages/VerifiedEmail';
import PasswordChanged from './components/extraPages/PasswordChanged';


function App() {
  // const params = useParams()
  return (


    <Router>
      <ToastContainer autoClose={2000} position={'top-right'} />

      <Routes>

        <Route path='/' element={<HomePage />} />

        {/* ------personal account ------- */}
        <Route path='/AccountInfo' element={<AccountInfo />} />
        <Route path='/BusinessDetails' element={<BusinessDetails />} />
        <Route path='/CardDetails' element={<CardDetails />} />

        {/* ----- Corporate account --------- */}
        <Route path='/CorporateAccInfo' element={<CorporateAccInfo />} />
        <Route path='/CorporateBusiness' element={<CorporateBusiness />} />
        <Route path='/CorporateCard' element={<CorporateCard />} />

        {/* ------- Agency Account -------- */}
        <Route path='/AgencyAccInfo' element={<AgencyAccInfo />} />
        <Route path='/AgencyBusiness' element={<AgencyBusiness />} />
        <Route path='/AgencyCard' element={<AgencyCard />} />

        {/* ---- completed ------ */}
        <Route path='/Completed' element={<Completed />} />


        <Route path='/auth/register/verify/:registerToken' element={<VerifiedEmail />} />
        <Route path='/auth/loginPage' element={<LoginPage />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/userProfile' element={<UserProfile />} />
        <Route path='/auth/forgotPassword' element={<ForgotPassword />} />
        <Route path='/auth/resetPassword/:registerToken' element={<ResetPassword />} />
        <Route path='/auth/passwordChanged' element={<PasswordChanged />} />



      </Routes>
    </Router>


  )
}

export default App;
