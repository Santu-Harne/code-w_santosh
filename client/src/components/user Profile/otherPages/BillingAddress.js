import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './BillingAddress.css'

function BillingAddress(props) {
    const [billAdd, setBillAdd] = useState([])
    const params = useParams()
    const email = params.email

    const iniFetch = async () => {
        await axios.get(`/auth/getbillingaddress/${email}`)
            .then(res => {
                // console.log(res.data.data);
                setBillAdd(res.data.data)
            }).catch(err => console.log(err.message))
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
                                                    <p>Address {index + 1} {index == 0 && (<span>Primary</span>)}</p>
                                                    <div className='d-flex justify-content-between flex-wrap'>
                                                        <p className='mb-0 text-secondary'>{item.street} <br />
                                                            {item.city}<br />
                                                            {item.country}</p>
                                                        <div>
                                                            <button className='btn btn-sm'>Delete</button>
                                                            <button className='btn btn-sm'>Edit</button>
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
                                            <button className='btn btn-sm add-btn btn-primary'>New Address</button>
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