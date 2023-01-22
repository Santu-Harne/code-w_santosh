import React, { } from 'react'
import Billing from './Billing'
import OtherPage from './otherPages/OtherPage'
import './Profile.css'


function Profile(props) {
    const { tabMenu, changeTabMenu, userInfo } = props

    return (
        <div className="container py-3 profile_section">
            <div className="row ">
                <div className="d-flex justify-content-between p-0">
                    <h4 className='heading position-relative'>Profile <span>Home - Account</span></h4>
                    <div>
                        <button className='btn  btn-sm btn-light me-2 text-secondary'><i className="bi bi-funnel-fill text-secondary"></i>Filter</button>
                        <button className='btn btn-sm btn-primary'>Create</button>
                    </div>
                </div>
            </div>
            {/* <div className="row mt-4">
                <div className='card pt-4 px-4'>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className='position-relative img-div'>
                                            <img className='display-img' src={userInfo.Image} alt="Dev img" />
                                            <span className='online'></span>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="row ms-3">
                                            <div className='d-flex'>
                                                <h4 className='mb-0'>{userInfo.Name} <i className="bi bi-patch-check-fill text-primary"></i></h4>
                                                <button className='upgrade-btn'>Upgrade to Pro</button>
                                            </div>
                                        </div>
                                        <div className="row ms-3 my-3">
                                            <div className='dev-info'>
                                                <span><i className="bi bi-person-circle text-secondary"></i>{userInfo.Account_Plan}</span>
                                                <span><i className="bi bi-geo-alt-fill text-secondary"></i>{userInfo.Address}</span>
                                                <span><i className="bi bi-envelope-at-fill text-secondary"></i>{userInfo.Email}</span>
                                            </div>
                                        </div>
                                        <div className="row ms-3 mt-5">
                                            <div className='d-flex'>
                                                <div className='user_stats'>
                                                    <h5><i className="bi bi-arrow-up-short text-success"></i>$4,500</h5>
                                                    <span className='text-secondary'>Earnings</span>
                                                </div>
                                                <div className='user_stats'>
                                                    <h5><i className="bi bi-arrow-down-short text-danger"></i>75</h5>
                                                    <span className='text-secondary'>Projects</span>
                                                </div>
                                                <div className='user_stats'>
                                                    <h5><i className="bi bi-arrow-up-short text-success"></i>60%</h5>
                                                    <span className='text-secondary'>Success Rate</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ms-3 mt-5">
                                            <div className='col-md-10 '>
                                                <label className='fs-6 text-secondary mb-2'>Profile Completion</label>
                                                <label className='fs-6 fw-bold mb-2 float-end'>50%</label>
                                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar bg-success w-50"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className='d-flex justify-content-end'>
                                    <button className='btn  btn-sm btn-light me-2 text-secondary'>Follow</button>
                                    <button className='btn btn-sm btn-primary me-2 '>Hire Me</button>
                                    <button className='btn btn-sm btn-light'><i className="bi bi-three-dots"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse mt-2" id="navbarNavAltMarkup">
                                        <div className="navbar-nav router">
                                            <button className={`${tabMenu.Overview ? 'route-btn-active' : null} btn route-btn`} name="Overview" onClick={changeTabMenu} >Overview</button>
                                            <button className={`${tabMenu.Settings ? 'route-btn-active' : null} btn route-btn`} name="Settings" onClick={changeTabMenu} >Settings</button>
                                            <button className={`${tabMenu.Security ? 'route-btn-active' : null} btn route-btn`} name="Security" onClick={changeTabMenu} >Security</button>
                                            <button className={`${tabMenu.Activity ? 'route-btn-active' : null} btn route-btn`} name="Activity" onClick={changeTabMenu} >Activity</button>
                                            <button className={`${tabMenu.Billing ? 'route-btn-active' : null} btn route-btn`} name="Billing" onClick={changeTabMenu}>Billing</button>
                                            <button className={`${tabMenu.Statements ? 'route-btn-active' : null} btn route-btn`} name="Statements" onClick={changeTabMenu} >Statements</button>
                                            <button className={`${tabMenu.Referrals ? 'route-btn-active' : null} btn route-btn`} name="Referrals" onClick={changeTabMenu} >Referrals</button>
                                            <button className={`${tabMenu.Logs ? 'route-btn-active' : null} btn route-btn`} name="Logs" onClick={changeTabMenu} >Logs</button>

                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row mt-4">
                <div className="col-md-12 px-0">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-10 offset-md-2">
                                    <div className='d-flex justify-content-between'>
                                        <div>hai</div>
                                        <div>hai</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col p-0">
                    {tabMenu.Overview && <OtherPage text={"Overview"} />}
                    {tabMenu.Settings && <OtherPage text={"Settings"} />}
                    {tabMenu.Security && <OtherPage text={"Security"} />}
                    {tabMenu.Activity && <OtherPage text={"Activity"} />}
                    {tabMenu.Statements && <OtherPage text={"Statements"} />}
                    {tabMenu.Logs && <OtherPage text={"Logs"} />}
                    {tabMenu.Billing && <Billing userInfo={userInfo} />}
                    {tabMenu.Referrals && <OtherPage text={"Referrals"} />}
                </div>
            </div>
        </div >
    )
}

export default Profile