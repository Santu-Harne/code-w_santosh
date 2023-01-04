import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../formStyles/styleone.css'


const HomePage = () => {
    const navigate = useNavigate()



    const AccountInfo = () => {
        navigate('/AccountInfo')

    }

    const CorporateAccInfo = () => {
        navigate('/CorporateAccInfo')
    }

    const AgencyAccInfo = () => {
        navigate('/AgencyAccInfo')

    }


    return (


        <div className="container-fluid">
            <div className="card ">
                {/***************************** Multi step Form Buttons ************************************** */}

                <div className='form'>
                    <div className="left-side">
                        <div className='nav flex-column nav-pills' id='v-pills-tab flex-column'
                            role="tablist" aria-orientation="vertical">
                            <ul className='progress-bar'>
                                <li className='active '>
                                    <button className="nav-link" id="v-pills-profile1-tab" data-bs-toggle="pill" data-bs-target="#acctype"
                                        type="button"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Type</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>
                                <li>
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
                                        type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Completed</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/***************************** Form Radio Buttons ************************************* */}
                    <div className="right-side position-relative">

                        <div className="main active">
                            <div className='text'>
                                <h2 className=''> Choose Account Type</h2>
                                <span className='spnTxt'> If you need more info, please check out &nbsp;
                                    <a className='helpPage' href='#'>Help Page </a></span>
                            </div>

                            <form className='d-flex '>
                                <div className='input-button'>
                                    <button className='mainBtn' onClick={() => AccountInfo()}>
                                        <div className="form-check   p-4">
                                            <input className="btn-check" type="radio" name="personalacc" id="personalacc"
                                                autoComplete='off' />
                                            Personal Account
                                        </div>
                                        {/*<span className='radoTxt'>If you need more info, please check it out</span>*/}
                                    </button>
                                </div>

                                <div className='input-button'>
                                    <button className='mainBtn' onClick={() => CorporateAccInfo()}>
                                        <div className="form-check   p-4">
                                            <input className="btn-check" type="radio" name="corporateacc" id="corporateacc"
                                                autoComplete='off' />
                                            Corporate Account
                                        </div>
                                        {/*<span className='radoTxt'>If you need more info, please check it out</span>*/}
                                    </button>
                                </div>

                                <div className='input-button'>
                                    <button className='mainBtn' onClick={() => AgencyAccInfo()}>
                                        <div className="form-check  p-4">
                                            <input className="btn-check" type="radio" name="agencyacc" id="agencyacc"
                                                autoComplete='off' />
                                            Agency Account
                                        </div>
                                        {/*<span className='radoTxt'>If you need more info, please check it out</span>*/}
                                    </button>
                                </div>
                                {/* <div>
                                    <NavLink to={'/auth/register/googleReg'} className='btn btn-warning'>Register</NavLink>
                                </div> */}
                            </form>

                        </div>
                        <div className='Home_login'>
                            <h3>Already have an account, Please Login</h3>
                            <NavLink to={'/auth/login'} className="btn btn-warning d-inline-block ms-auto">Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HomePage