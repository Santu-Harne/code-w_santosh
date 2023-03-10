import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../GlobalContext';
import { toast } from 'react-toastify'



const AccountInfoLinkedin = () => {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const context = useContext(DataContext)
    const [personalAccInfo, setPersonalAccInfo] = context.personalAccInfo
    const navigate = useNavigate()
    const params = useParams()



    const getUser = async () => {
        try {
            // await axios.get("https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))", {
            //     headers: {
            //         "Content-Type": "application/x-www-form-urlencoded",
            //         'Authorization': `Bearer ${params.accessToken}`,
            //         'Access-Control-Allow-Origin': "*",
            //         'Access-Control-Allow-Methods': "GET,POST,PUT,PATCH"
            //     }
            // }).then(response => console.log(response))
            //     .catch(err => console.log(err.message))

            console.log(params.accessToken);
        } catch (error) {
            console.log(error.message)
        }
    }

    const home = () => { navigate('/') }
    const AccountInfoLinkedin = () => { navigate('/AccountInfoLinkedin') }
    const BusinessDetailsLinkedin = () => { navigate('/BusinessDetailsLinkedin') }
    const CardDetailsLinkedin = () => { navigate('/CardDetailsLinkedin') }

    const readValue = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        setPersonalAccInfo({ ...personalAccInfo, [name]: value })
    }
    useEffect(() => {
        getUser()
    }, [])


    return (
        <div className="container-fluid">
            <div className="card">
                {/***************************** Multi step Form Buttons ************************************** */}
                <div className='form'>
                    <div className="left-side">

                        <div className='nav flex-column nav-pills' id='v-pills-tab flex-column'
                            role="tablist" aria-orientation="vertical">
                            <ul className='progress-bar'>
                                <li >
                                    <button onClick={() => home()} className="nav-link " id="v-pills-profile1-tab" data-bs-toggle="pill" data-bs-target="#acctype"
                                        type="button"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false" aria-checked="true">Account Type</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>

                                <li className='active'>
                                    <button onClick={() => AccountInfoLinkedin()} className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#accinfo"
                                        type="button"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Information</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>

                                <li>
                                    <button onClick={() => { BusinessDetailsLinkedin() }} className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        data-bs-target="#bussinessinfo" type="button" role="tab"
                                        aria-controls="v-pills-messages" aria-selected="false">Business Details</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>

                                <li>
                                    <button onClick={() => { CardDetailsLinkedin() }} className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#cardinfo"
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
                                            placeholder='Enter your name' name='Name' value={personalAccInfo.Name} onChange={readValue} className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Email" className="form-label">Email:</label>
                                        <input type="email" id="Email" name='Email'
                                            placeholder='Enter your Email ID' value={personalAccInfo.Email} onChange={readValue} className="form-control" readOnly />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="Password" className="form-label">Password:</label>
                                        <input type="password" id="Password" name='Password'
                                            placeholder='Create a password for your account' value={personalAccInfo.Password} onChange={readValue} className="form-control" />
                                    </div>

                                    <div className='mb-3 d-flex justify-content-between'>
                                        {/* ************************** Radio Buttons*********** */}
                                        <div className='btnpage1'>
                                            <label className='radio1'>Account Plan :</label>
                                            <div className="form-check">
                                                <label htmlFor="Account_Plan" className="form-check-label" >
                                                    <input type="radio" name='Account_Plan' className="form-check-input"
                                                        value="Company Account" checked={personalAccInfo.Account_Plan === "Account_Plan"}
                                                        onChange={readValue} />Company Account</label><br />
                                                <label htmlFor="Account_Plan" className="form-check-label" >
                                                    <input type="radio" name='Account_Plan' value="Developer Account"
                                                        checked={personalAccInfo.Account_Plan === "Account_Plan"} onChange={readValue}
                                                        className="form-check-input" />Developer Account</label><br />

                                                <label htmlFor="Account_Plan" className="form-check-label" >
                                                    <input type="radio" name='Account_Plan' value="Testing Account"
                                                        checked={personalAccInfo.Account_Plan === "Account_Plan"} onChange={readValue}
                                                        className="form-check-input" />Testing Account</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mt-3">
                                            <NavLink to={'/BusinessDetailsLinkedin'} className="btn btn-primary nav-link float-end mb-5 text-white p-2">Next</NavLink>
                                        </div>
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

export default AccountInfoLinkedin