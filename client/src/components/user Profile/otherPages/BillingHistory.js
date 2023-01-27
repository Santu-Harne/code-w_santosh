import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './BillingHistory.css'

function BillingHistory(props) {
    const [bill, setBill] = useState([])
    const [month, setMonth] = useState(true)
    const [year, setYear] = useState(false)
    const [allTime, setAllTime] = useState(false)

    const params = useParams()
    const email = params.email

    const iniFetch = async () => {
        await axios.get(`/auth/billinghistory/${email}`)
            .then(res => {
                // console.log(res.data.data);
                setBill(res.data.data)
            }).catch(err => console.log(err.message))
    }


    useEffect(() => {
        iniFetch()
    }, [])

    const monthView = () => {
        setMonth(true)
        setAllTime(false)
        setYear(false)
    }
    const yearView = () => {
        setMonth(false)
        setAllTime(false)
        setYear(true)
    }
    const allTimeView = () => {
        setMonth(false)
        setAllTime(true)
        setYear(false)
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 px-0">
                    <div className="card mt-3">
                        <div className="card-header py-0 ps-4 d-flex justify-content-between align-items-center flex-wrap">
                            <p className='fw-bold pt-3'>Billing History {month ? "(Month)" : null} {year ? "(Year)" : null} {allTime ? "(All Time)" : null} </p>
                            <ul className={`nav justify-content-end`}>
                                <li className={`${month ? 'active-view' : null}  nav-item text-secondary `} onClick={monthView}>Month</li>
                                <li className={`${year ? 'active-view' : null}  nav-item text-secondary`} onClick={yearView}>Year</li>
                                <li className={`${allTime ? 'active-view' : null}  nav-item text-secondary`} onClick={allTimeView}>All Time</li>
                            </ul>
                        </div>
                        <div className="card-body p-0 history-table">
                            <table className="table  mb-0 overflow-x-scroll">
                                <thead>
                                    <tr className="table-active">
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Amount</th>
                                        <th colSpan={2}>Invoice</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        bill && bill.map((item, index) => {
                                            return (
                                                <tr key={index} className='overflow-x-auto'>
                                                    <td >{item.Date}</td>
                                                    <td className={item.Description === 'Paypal' ? 'text-secondary' : 'text-primary'}>{item.Description}</td>
                                                    <td>${item.Amount}</td>
                                                    <td><button className='btn btn-sm'>PDF</button></td>
                                                    <td><button className='btn btn-sm'>View</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BillingHistory