import React from 'react'
import axios from 'axios'
import { useState, useEffect,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../formStyles/styleone.css'
import {DataContext} from '../../GlobalContext';


const AgencyBusiness = () => {

    const context = useContext(DataContext)
    const [agencyAccInfo, setAgencyAccInfo] = context.agencyAccInfo
    const navigate = useNavigate()

    

    const readValue = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        setAgencyAccInfo({ ...agencyAccInfo, [name]: value })
    }
    const home = ()=>{navigate('/')}
    
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
                                    <button onClick={()=>home()} className="nav-link" id="v-pills-profile1-tab" data-bs-toggle="pill" data-bs-target="#acctype"
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


                    <div className="right-side">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="accinfo" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                {/*******************Personal account form2 - Business Details***********/}

                                <form className='secondPage mt-3'>
                                <h2 className="fs-title text-center">{/*Business Account */}<span className='fststep'>Business Details</span></h2>
                                   
                                <div className="mb-2">
                                        <label htmlFor="Business_Type" className="form-label">Business Type:</label>
                                        <input type="text" name='Business_Type' className='form-control' value={agencyAccInfo.Business_Type} onChange={readValue} />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="Document_Type" className="form-label">Business Id Proof:</label>
                                        <input type="text" name='Document_Type' className='form-control' value={agencyAccInfo.Document_Type} onChange={readValue} />
                                    </div>

                                    <div className='mb-2'>
                                        <label htmlFor="Document_Number" className="form-label">Business Id Number</label>
                                        <input type="number" name='Document_Number'
                                        placeholder='Enter document number' value={agencyAccInfo.Document_Number} onChange={readValue} className="form-control" />
                                    </div>

                                    <div className='mb-2'>
                                        <label htmlFor="Document_Location" className="form-label">Business Id Location</label>
                                        <input type="text" name='Document_Location'
                                        placeholder='Enter Document Location' value={agencyAccInfo.Document_Location} onChange={readValue} className="form-control" />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="Address" className="form-label">Address:</label>
                                        <textarea name="Address" id="Address"
                                        placeholder='Address' cols="20" rows="5" value={agencyAccInfo.Address} onChange={readValue} className="form-control"></textarea>
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="Mobile" className="form-label">Mobile:</label>
                                        <input type="number" id="Mobile" name='Mobile'
                                        placeholder='Mobile number' value={agencyAccInfo.Mobile} onChange={readValue} className="form-control" />
                                    </div>

                                    <div className='nextBtn float-end'>
                                <NavLink to={'/AgencyCard'} className="nav-link">
                                    <button className='btn nxt'>Next</button>
                                </NavLink>
                            </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgencyBusiness