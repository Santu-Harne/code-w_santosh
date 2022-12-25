import React from 'react'
import { NavLink } from 'react-router-dom'

function Completed() {
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
                                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" 
                                    data-bs-target="#cardinfo"
                                        type="button" role="tab" aria-controls="v-pills-message" aria-selected="false">Card Details</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>
                                <li>
                                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                     data-bs-target="#cardinfo"
                                        type="button" role="tab" aria-controls="v-pills-message" aria-selected="false">Completed</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/***************************** Personal Account Form3 ************************************** */}
                    <div className="right-side">
                    <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active " id="accinfo" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                <div className='d-flex justify-content-center align-items-center mt-5'>
                                        <div className="col-md-6 offset-md-1 mt-5">
                                        <div className="card h-50 bg-info text-center d-flex justify-content-center align-items-center">
                                            <h1 className='p-4'>Registration Completed</h1>
                                            <NavLink to={'/'} className='nav-link'><button className='btn btn-outline-warning bg-secondary mb-2 fs-3'>Return to Home</button></NavLink>
                                        </div>
                                        
                                    </div>
                                </div>
                                    
                                
                                
                            </div>

                            {/*******************Return to Home***********/}

                            

                        </div>
                    </div>


                </div>
            </div>
        </div>
    
  )
}

export default Completed