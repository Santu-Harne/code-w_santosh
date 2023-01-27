import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
    Address_Name: '',
    street: '',
    city: '',
    country: '',
}

function EditAddress(props) {
    const [addressDetails, setAddressDetails] = useState(initialState)

    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const email = params.email

    const iniFetch = () => {
        axios.get(`/auth/userProfile/getsingleaddress/${id}`)
            .then(res => {
                setAddressDetails(res.data.data)
            }).catch(err => console.log(err.message))
    }

    const readValue = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setAddressDetails({ ...addressDetails, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await axios.put(`/auth/userProfile/editaddress/${id}`, addressDetails)
            .then(res => {
                // console.log(res);
                toast.success(res.data.msg)
                setAddressDetails(initialState)
                navigate(`/userProfile/${email}`)
            }).catch(err => console.log(err.message))
    }
    useEffect(() => {
        iniFetch()
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2 className="text-info">Update Address</h2>
                        </div>
                        <div className="card-body p-4">
                            <form action="" autoComplete='off'>
                                <div className="form-group mb-3">
                                    <label htmlFor="Address_Name" className='form-label'>Address_Name</label>
                                    <input type="text" name="Address_Name" id="Address_Name" className='form-control' value={addressDetails.Address_Name} onChange={readValue} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="street" className='form-label'>street</label>
                                    <input type="text" name="street" id="street" className='form-control' value={addressDetails.street} onChange={readValue} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="city" className='form-label'>city</label>
                                    <input type="text" name="city" id="city" className='form-control' value={addressDetails.city} onChange={readValue} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="country" className='form-label'>country</label>
                                    <input type="text" name="country" id="country" className='form-control' value={addressDetails.country} onChange={readValue} />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="Submit" value={'Update Address'} className='btn btn-success' onClick={submitHandler} readOnly />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditAddress