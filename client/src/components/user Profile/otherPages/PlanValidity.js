import React, { } from 'react'
import './PlanValidity.css'

function PlanValidity(props) {
    const { userInfo } = props
    return (
        <div className="container  ">
            <div className="row">
                <div className='card pt-4 px-4 plan-validity'>
                    <div className="col-md-12">
                        <div className='d-flex align-items-center warning'>
                            <i className="bi bi-exclamation-circle-fill"></i>
                            <div>
                                <p className='fw-bold'>We need your attention!</p>
                                <p className='fw-bold text-secondary'>Your payment was declined. To start your tools, please <a href="#">Add Payment Methods</a> </p>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-lg-6 d-flex flex-column valid-date">
                                <span className='fw-bold'>Active until {userInfo.Plan_Validity}</span>
                                <span className='fw-bold text-secondary'>We will send you a notification upon Subscription wxpiration</span>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <span className='fs-6 mb-2 fw-bold'>Users</span>
                                    <label className='fs-6 fw-bold float-end'>86 of 100 Used</label>
                                </div>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar w-75"></div>
                                </div>
                                <label className='fs-6 fw-bold mt-2 text-secondary'>14 Users remaining until your plan requires update</label>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-lg-6 d-flex flex-column valid-date">
                                <span className='fw-bold'>${userInfo.Plan_Price} Per Month</span>
                                <span className='fw-bold text-secondary'>Extended RPo Package. Up tp 100 Agents & 25 Projects</span>
                            </div>
                            <div className="col-lg-6">
                                <div className='upgrade_plan'>
                                    <button className='btn btn-secondary me-2'>Cancel Subscription</button>
                                    <button className='btn btn-primary'>Upgrade Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlanValidity