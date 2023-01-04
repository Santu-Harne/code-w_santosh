import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



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
import ResetPassword from './components/extraPages/ResetPassword';
import Login from './components/extraPages/Login';
import ForgotPassword from './components/extraPages/ForgotPassword';
import UserProfile from './components/profile pages/UserProfile';
import VerifiedEmail from './components/extraPages/VerifiedEmail';
import PasswordChanged from './components/extraPages/PasswordChanged';
import Success from './components/extraPages/Success';
import GoogleReg from './components/extraPages/GoogleReg';
import AccountInfoGoogleGoogle from './components/personalAccountGoogle/AccountInfoGoogle';
import BusinessDetailsGoogle from './components/personalAccountGoogle/BusinessDetailsGoogle';
import CardDetailsGoogle from './components/personalAccountGoogle/CardDetailsGoogle';
import PersonalRegMenu from './components/personalAccount/PersonalRegMenu';





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

        {/* personal register google */}
        <Route path='/AccountInfoGoogle/:name/:email' element={<AccountInfoGoogleGoogle />} />
        <Route path='/BusinessDetailsGoogle' element={<BusinessDetailsGoogle />} />
        <Route path='/CardDetailsGoogle' element={<CardDetailsGoogle />} />

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

        <Route path='/auth/register/googleReg' element={<GoogleReg />} />
        <Route path='/auth/userProfile/:email' element={<UserProfile />} />
        <Route path='/auth/forgotPassword' element={<ForgotPassword />} />
        <Route path='/auth/resetPassword/:registerToken' element={<ResetPassword />} />
        <Route path='/auth/passwordChanged' element={<PasswordChanged />} />
        <Route path='/socialLoginAuth/loggedIn' element={<Success />} />

        <Route path='/personalRegMenu' element={<PersonalRegMenu />} />



      </Routes>
    </Router>


  )
}

export default App;
