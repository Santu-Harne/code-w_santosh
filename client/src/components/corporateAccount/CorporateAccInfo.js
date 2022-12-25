import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../GlobalContext';

const CorporateAccInfo = () => {

  const navigate = useNavigate()
  const context = useContext(DataContext)
  const [corpAccInfo, setCorpAccInfo] = context.corporateAccInfo

  const readValue = (e) => {
      e.preventDefault()
      const { name, value } = e.target

      setCorpAccInfo({ ...corpAccInfo, [name]: value })
  }

  
  
  return (
    <div className="container-fluid">
    <div className="card">
        {/***************************** Multi step Form Buttons ************************************** */}
        <div className='form'>
            <div className="left-side">

                <div className='nav flex-column nav-pills' id='v-pills-tab flex-column'
                    role="tablist" aria-orientation="vertical">
                    <ul className='progress-bar'>
                        <li className=''>
                            <button className="nav-link" id="v-pills-profile1-tab" data-bs-toggle="pill" data-bs-target="#acctype"
                                type="button"
                                role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Type</button>
                            <span className='Accdescrip'>Select your acount type</span>
                        </li>
                        <li className='active'>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#accinfo"
                                type="button"
                                role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Information</button>
                            <span className='Accdescrip'>Select your acount type</span>
                        </li>

                        <li>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                data-bs-target="#bussinessinfo" type="button" role="tab"
                                aria-controls="v-pills-messages" aria-selected="false">Business Details</button>
                            <span className='Accdescrip'>Select your acount type</span>
                        </li>

                        <li>
                            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#cardinfo"
                                type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Card Details</button>
                            <span className='Accdescrip'>Select your acount type</span>
                        </li>
                        <li>
                            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#cardinfo"
                                type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Card Details</button>
                            <span className='Accdescrip'>Select your acount type</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/***************************** Personal Account Forms ************************************** */}
            <div className="right-side">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="accinfo" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        {/******************************Personal account form1- Account Info***********/}

                        <form className='firstpage' >
                            <h2 className="fs-title text-center">{/*Personal Account */}<span className='fststep'>Account Information</span></h2>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">Name:</label>
                                <input type="text" id="Name"
                                    placeholder='Enter your name' name='Name' value={corpAccInfo.Name} onChange={readValue} className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">Email:</label>
                                <input type="email" id="Email" name='Email'
                                    placeholder='Enter your Email ID' value={corpAccInfo.Email} onChange={readValue} className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">Password:</label>
                                <input type="password" id="Password" name='Password'
                                    placeholder='Create a password for your account' value={corpAccInfo.Password} onChange={readValue} className="form-control" />
                            </div>
                            {/* <div className="mb-3">
<label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
<input type="password" id="confirmPassword" name='confirmPassword' value={data.confirmPassword}  onChange={readValue} className="form-control"/>
</div> */}
                            <div className='mb-3 d-flex justify-content-between'>
                                {/* ************************** Radio Buttons*********** */}
                                <div className='btnpage1'>
                                    <label className='radio1'>Account Plan :</label>
                                    <div className="form-check">
                                        <label htmlFor="Account_Plan" className="form-check-label" >
                                            <input type="radio" name='Account_Plan' className="form-check-input"
                                                value="CompanyAccount" checked={corpAccInfo.Account_Plan === "Account_Plan"}
                                                onChange={readValue} />Company Account</label><br />
                                        <label htmlFor="Account_Plan" className="form-check-label" >
                                            <input type="radio" name='Account_Plan' value="DeveloperAccount"
                                                checked={corpAccInfo.Account_Plan === "Account_Plan"} onChange={readValue}
                                                className="form-check-input" />Developer Account</label><br />

                                        <label htmlFor="Account_Plan" className="form-check-label" >
                                            <input type="radio" name='Account_Plan' value="TestingAccount"
                                                checked={corpAccInfo.Account_Plan === "Account_Plan"} onChange={readValue}
                                                className="form-check-input" />Testing Account</label>
                                    </div>
                                </div>
                            </div>

                            <div className='nextBtn float-end'>
                                <NavLink to={'/CorporateBusiness'} className="nav-link">
                                    <button className='btn nxt'>Next</button>
                                </NavLink>
                            </div>
                        </form>
                    </div>

                    {/*******************Return to Home*******

                    <div className='retrnTohome'>
                        <NavLink to={'/HomePage'} className="nav-link">
                            <button className='btn returnBtn'>Return to Home</button>
                        </NavLink>
                    </div> ****/}

                </div>
            </div>


        </div>
    </div>
</div>
  )
}

export default CorporateAccInfo