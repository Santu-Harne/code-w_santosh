import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
import './BillingAddress.css'

function BillingAddress(props) {
    const [billAdd, setBillAdd] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    const email = params.email

    const iniFetch = async () => {
        await axios.get(`/auth/userProfile/getbillingaddress/${email}`)
            .then(res => {
                // console.log(res.data.data);
                setBillAdd(res.data.data)
            }).catch(err => console.log(err.message))
    }

    const deleteAddress = (id) => {
        // window.alert(`user Id : ${id}`)
        if (window.confirm(`Are you sure you want to delete address`)) {
            axios.delete(`/auth/userProfile/deleteaddress/${id}`)
                .then(res => {
                    toast.success(res.data.msg)
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                }).catch(err => console.log(err.message))
        }
    }

    useEffect(() => {
        iniFetch()
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 px-0">
                    <div className="card mt-3">
                        <div className="card-header">
                            <p className='fw-bold mb-0 py-2 ps-3'>Billing Address</p>
                        </div>
                        <div className="card-body p-4">
                            <div className="row">
                                {
                                    billAdd && billAdd.map((item, index) => {
                                        return (
                                            <div key={index} className="col-md-6 mt-3">
                                                <div className='address-card rounded p-4'>
                                                    <p>{item.Address_Name} {index == 0 && (<span>Primary</span>)}</p>
                                                    <div className='d-flex justify-content-between flex-wrap'>
                                                        <p className='mb-0 text-secondary'>{item.street} <br />
                                                            {item.city}<br />
                                                            {item.country}</p>
                                                        <div>
                                                            <button type='button' className='btn btn-sm' onClick={() => deleteAddress(item.Id)}>Delete</button>
                                                            <button className='btn btn-sm' onClick={() => navigate(`/userProfile/editAddress/${email}/${item.Id}`)}>Edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="col-md-6 mt-3">
                                    <div className='add-address rounded p-4'>
                                        <p>This is a very important note!</p>
                                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                            <p className='mb-1 text-secondary'>Writing headings for blog posts is much <br />science and probably cool audience</p>
                                            <button className='btn btn-sm add-btn btn-primary' onClick={() => navigate(`/userProfile/addAddress/${email}`)}>New Address</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className='fw-bold mt-4 mb-0'>Tax Location</p>
                            <span className='text-secondary fw-bold' >United States - 10% VAT</span> <br />
                            <a href='#' className='text-primary text-decoration-none fw-bold'>More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillingAddress