import React from 'react';
import './responsive.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import HomePage from './components/homePage/HomePage';

import AccountInfo from './components/personalAccount/AccountInfo';
import BusinessDetails from './components/personalAccount/BusinessDetails';
import CardDetails from './components/personalAccount/CardDetails';

import AccountInfoGoogle from './components/personalAccountGoogle/AccountInfoGoogle';
import BusinessDetailsGoogle from './components/personalAccountGoogle/BusinessDetailsGoogle';
import CardDetailsGoogle from './components/personalAccountGoogle/CardDetailsGoogle';

import AccountInfoLinkedin from './components/personalAccLinkedin/AccountInfoLinkedin';
import BusinessDetailsLinkedin from './components/personalAccLinkedin/BusinessDetailsLinkedin';
import CardDetailsLinkedin from './components/personalAccLinkedin/CardDetailsLinkedin';

import CorporateAccInfo from './components/corporateAccount/CorporateAccInfo';
import CorporateBusiness from './components/corporateAccount/CorporateBussiness';
import CorporateCard from './components/corporateAccount/CorporateCard';

import AgencyAccInfo from './components/agencyAccount/AgencyAccInfo'
import AgencyBusiness from './components/agencyAccount/AgencyBusiness';
import AgencyCard from './components/agencyAccount/AgencyCard';

import Completed from './components/Completed';
import ResetPassword from './components/extraPages/ResetPassword';
import Login from './components/extraPages/Login';
import ForgotPassword from './components/extraPages/ForgotPassword';
import UserProfile from './components/user Profile/UserProfile';
import VerifiedEmail from './components/extraPages/VerifiedEmail';
import PasswordChanged from './components/extraPages/PasswordChanged';
import Success from './components/extraPages/Success';
import LinkedInAccToken from './components/personalAccLinkedin/LinkedInAccToken';
import AddCard from './components/user Profile/otherPages/AddCard';
import EditCard from './components/user Profile/otherPages/EditCard';
import AddAddress from './components/user Profile/otherPages/AddAddress';
import EditAddress from './components/user Profile/otherPages/EditAddress';







function App() {
  // const params = useParams()
  return (


    <Router>
      <ToastContainer autoClose={2000} position={'top-right'} />

      <Routes>

        <Route path='/' element={<HomePage />} />
        {/* <Route path='/' element={<UserProfile />} /> */}

        {/* ------personal account ------- */}
        <Route path='/AccountInfo' element={<AccountInfo />} />
        <Route path='/BusinessDetails' element={<BusinessDetails />} />
        <Route path='/CardDetails' element={<CardDetails />} />

        {/* personal register google */}
        <Route path='/AccountInfoGoogle/:name/:email' element={<AccountInfoGoogle />} />
        <Route path='/BusinessDetailsGoogle' element={<BusinessDetailsGoogle />} />
        <Route path='/CardDetailsGoogle' element={<CardDetailsGoogle />} />

        {/* person register linkedin */}
        <Route path='/AccountInfoLinkedin/:accessToken' element={<AccountInfoLinkedin />} />
        <Route path='/BusinessDetailsLinkedin' element={<BusinessDetailsLinkedin />} />
        <Route path='/CardDetailsLinkedin' element={<CardDetailsLinkedin />} />

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
        <Route path='/auth/login' element={<Login />} />

        <Route path='/userProfile/:email' element={<UserProfile />} />
        <Route path='/auth/forgotPassword' element={<ForgotPassword />} />
        <Route path='/auth/resetPassword/:registerToken' element={<ResetPassword />} />
        <Route path='/auth/passwordChanged' element={<PasswordChanged />} />
        <Route path='/socialLoginAuth/loggedIn' element={<Success />} />


        <Route path='/socialLogin/linkedin' element={<LinkedInCallback />} />
        <Route path='/linkedin/:code' element={<LinkedInAccToken />} />

        <Route path='/userProfile/addCard/:email' element={<AddCard />} />
        <Route path='/userProfile/editCard/:email/:id' element={<EditCard />} />
        <Route path='/userProfile/addAddress/:email' element={<AddAddress />} />
        <Route path='/userProfile/editAddress/:email/:id' element={<EditAddress />} />

      </Routes>
    </Router>


  )
}

export default App;