import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../formStyles/styleone.css'
import { DataContext } from '../../GlobalContext';
import { toast } from 'react-toastify'

const CorporateBusiness = () => {

    const context = useContext(DataContext)
    const [corpAccInfo, setCorpAccInfo] = context.corporateAccInfo
    const navigate = useNavigate()

    // const validate = (e, name, value) => {
    //     switch (name) {
    //         case "Business_Type":
    //             if (value.length < 5) {
    //                 toast.error("This field must not be empty")
    //             } else if (!new RegExp(/^[a-z A-Z \s]+$/).test(value)) {
    //                 toast.error("This field allows only alphabetical char")

    //             }
    //             break;
    //         case "Document_Type":
    //             if (value.length < 5) {
    //                 toast.error("This field must not be empty")
    //             } else if (!new RegExp(/^[a-z A-Z \s]+$/).test(value)) {
    //                 toast.error("This field allows only alphabetical char")

    //             }
    //             break;
    //         case "Document_Number":
    //             if (value.length < 5) {
    //                 toast.error("This field must not be empty")
    //             } else if (!new RegExp(/^[0-9\s]+$/).test(value)) {
    //                 toast.error("This field allows only numerical char")

    //             }
    //             break;
    //         case "Document_Location":
    //             if (value.length === 0) {
    //                 toast.error("This field must not be empty")
    //             } else if (!new RegExp(/^[a-z A-Z \s]+$/).test(value)) {
    //                 toast.error("This field allows only alphabetical char")

    //             }
    //             break;
    //         case "Address":
    //             if (value.length === 0) {
    //                 toast.error("This field must not be empty")
    //             }
    //             break;
    //         case "Mobile":
    //             if (value.length < 10) {
    //                 toast.error("This field must allows only 10 digits")
    //             } else if (!new RegExp(/^[0-9\s]+$/).test(value)) {
    //                 toast.error("This field must allows digits")
    //             }
    //         default:
    //     }
    // }
    const setFile = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (file) {
            // console.log(`file name = `, file)
            setCorpAccInfo({ ...corpAccInfo, Document_Location: file.name, Document_Object: file })
        }
    }
    const readValue = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        // validate(e, name, value)
        setCorpAccInfo({ ...corpAccInfo, [name]: value })
    }
    const home = () => { navigate('/') }
    const CorporateAccInfo = () => { navigate('/CorporateAccInfo') }
    const CorporateBusiness = () => { navigate('/CorporateBusiness') }
    const CorporateCard = () => { navigate('/CorporateCard') }


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
                                    <button onClick={() => home()} className="nav-link" id="v-pills-profile1-tab" data-bs-toggle="pill" data-bs-target="#acctype"
                                        type="button"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Type</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>
                                <li >
                                    <button onClick={() => CorporateAccInfo()} className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#accinfo"
                                        type="button"
                                        role="tab" aria-controls="v-pills-profile" aria-selected="false">Account Information</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>

                                <li className='active'>
                                    <button onClick={() => { CorporateBusiness() }} className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        data-bs-target="#bussinessinfo" type="button" role="tab"
                                        aria-controls="v-pills-messages" aria-selected="false">Business Details</button>
                                    <span className='Accdescrip'>Select your acount type</span>
                                </li>

                                <li>
                                    <button onClick={() => { CorporateCard() }} className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#cardinfo"
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


                    <div className="right-side">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="accinfo" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                {/*******************Personal account form2 - Business Details***********/}

                                <form className='secondPage mt-2'>
                                    <h2 className="fs-title text-center">{/*Business Account */}<span className='fststep'>Business Details</span></h2>

                                    <div className="mb-1">
                                        <label htmlFor="Business_Type" className="form-label">Business Type:</label>
                                        <input type="text" name='Business_Type' className='form-control' value={corpAccInfo.Business_Type} onChange={readValue} />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="Document_Type" className="form-label">Business Id Proof:</label>
                                        <input type="text" name='Document_Type' className='form-control' value={corpAccInfo.Document_Type} onChange={readValue} />
                                    </div>

                                    <div className='mb-1'>
                                        <label htmlFor="Document_Number" className="form-label">Business Id Number</label>
                                        <input type="number" name='Document_Number'
                                            placeholder='Enter document number' value={corpAccInfo.Document_Number} onChange={readValue} className="form-control" />
                                    </div>

                                    <div className='mb-1'>
                                        <label htmlFor="Document_Location" className="form-label">Business Id upload</label>
                                        <input type="file"
                                            placeholder='Enter Document Location' onChange={setFile} className="form-control" />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="Address" className="form-label">Address:</label>
                                        <textarea name="Address" id="Address"
                                            placeholder='Address' cols="20" rows="3" value={corpAccInfo.Address} onChange={readValue} className="form-control"></textarea>
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="Mobile" className="form-label">Mobile:</label>
                                        <input type="number" id="Mobile" name='Mobile'
                                            placeholder='Mobile number' value={corpAccInfo.Mobile} onChange={readValue} className="form-control" />
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <NavLink to={'/CorporateAccInfo'} className="nav-link float-start mt-3 btn btn-danger p-2 text-white">Back</NavLink>
                                        </div>
                                        <div className="col-6">
                                            <NavLink to={'/CorporateCard'} className="nav-link float-end btn btn-primary p-2 mt-3 text-white">Next</NavLink>
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

export default CorporateBusiness