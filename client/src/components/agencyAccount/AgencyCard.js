import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../formStyles/styleone.css'
import { DataContext } from '../../GlobalContext';
import { toast } from "react-toastify"
import FileApi from './../../Api/FileApi';

const AgencyCard = () => {

    const context = useContext(DataContext)
    const [agencyAccInfo, setAgencyAccInfo] = context.agencyAccInfo
    const navigate = useNavigate()


    const home = () => { navigate('/') }
    const AgencyAccInfo = () => { navigate('/AgencyAccInfo') }
    const AgencyBusiness = () => { navigate('/AgencyBusiness') }
    const AgencyCard = () => { navigate('/AgencyCard') }

    const readValue = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        setAgencyAccInfo({ ...agencyAccInfo, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/auth/register', agencyAccInfo)
                .then(res => {
                    // console.log("after register =", res.data.data)
                    toast.success(res.data.msg)
                    navigate('/Completed')
                }).catch(err => console.log(err.message))

            const file = agencyAccInfo.Document_Object;
            // iterate image through formData
            let formData = new FormData();
            formData.append('myFile', file)

            await FileApi.storeFile(formData)
                .then(res => {
                    // console.log("File Uploaded successfully");
                    navigate('/Completed')
                }).catch(err => toast.error(err.message))
        } catch (error) {
            console.log(error.message);
        }
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
                                <li>
                                    <button onClick={() => home()} className="nav-link" id="v-pills-profile1-tab" data-bs-toggle="pill" data-bs-target="#acctype"
                                        type="button"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Type</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>
                                <li>
                                    <button onClick={() => AgencyAccInfo()} className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#accinfo"
                                        type="button"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Information</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>

                                <li>
                                    <button onClick={() => { AgencyBusiness() }} className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        data-bs-target="#bussinessinfo" type="button" role="tab"
                                        aria-controls="v-pills-messages" aria-selected="false">Business Details</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>

                                <li className='active'>
                                    <button onClick={() => { AgencyCard() }} className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
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
                            <div className="tab-pane fade show active" id="accinfo" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                {/*******************Personal account form1- Card Details***********/}
                                <form className='thirdPage'>
                                    <h2 className="fs-title text-center">{/*****Personal Account***/}<span className='fststep'>Card Details</span></h2>

                                    <div className="mb-3">
                                        <label htmlFor="Name_On_Card">Card Name:</label><br />
                                        <input type="text" name='Name_On_Card'
                                            placeholder='Name Surname' value={agencyAccInfo.Name_On_Card} onChange={readValue} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Card_Number">Card Number:</label><br />
                                        <input type="number" name='Card_Number'
                                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                            value={agencyAccInfo.Card_Number} onChange={readValue} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Expire_Date">Expiry Date:</label><br />
                                        <input type="text" name='Expire_Date'
                                            placeholder='mm/yy' value={agencyAccInfo.Expire_Date} onChange={readValue} className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <NavLink to={'/AgencyBusiness'} className="nav-link float-start mt-2 btn btn-danger p-2 text-white">Back</NavLink>
                                    </div>

                                    <div className='retrnTohome'>
                                        <button onClick={(e) => handleSubmit(e)} className='btn returnBtn'>Submit</button>
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

export default AgencyCard