import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SideNavBar.css'
import metronics from '../../../assets/images/metronics.png'

function SideNavBar(props) {
    const { isExpended, setIsExpended, tabMenu, changeTabMenu } = props
    const [dropdown, setDropdown] = useState(true)

    return (
        <div className={isExpended ? 'side-nav-container' : 'side-nav-container side-nav-container-NX'}>
            <div className="nav-upper">
                {isExpended &&
                    (<div className="nav-brand pt-2 ps-2">
                        <img src={metronics} alt="brand logo" />
                        <h2 className='text-light'>Metronic</h2>
                    </div>)}

                {isExpended && (<div className="nav-menu">
                    <ul className='list-group mt-4'>
                        <li className='menu-item mb-3'><i className="bi bi-grid-fill"></i> <span className=''>Dashboard</span></li>
                        <li className='menu-item position-relative '><i className="bi bi-x-diamond-fill"></i>Account
                            <span className='drop-toggle' onClick={() => setDropdown(!dropdown)}>{dropdown ? <i className="text-dark bi bi-chevron-down"></i> : <i className="text-dark bi bi-chevron-up"></i>}</span>
                        </li>
                        <ul className={`drop-menu p-0 ${dropdown ? 'drop-on' : 'drop-off'}`}>
                            <li className={tabMenu.Overview ? "nav-link-active" : null} ><button className={`btn nav-link side-nav`} name="Overview" onClick={changeTabMenu}>Overview</button></li>
                            <li className={tabMenu.Settings ? "nav-link-active" : null} ><button className={`btn nav-link side-nav`} name="Settings" onClick={changeTabMenu} >Settings</button></li>
                            <li className={tabMenu.Security ? "nav-link-active" : null} ><button className={`btn nav-link side-nav`} name="Security" onClick={changeTabMenu} >Security</button></li>
                            <li className={tabMenu.Activity ? "nav-link-active" : null} ><button className={`btn nav-link side-nav`} name="Activity" onClick={changeTabMenu} >Activity</button></li>
                            <li className={tabMenu.Billing ? "nav-link-active" : null} ><button className={`btn nav-link side-nav`} name="Billing" onClick={changeTabMenu}>Billing</button></li>
                            <li className={tabMenu.Statements ? "nav-link-active" : null} ><button className={`btn nav-link side-nav`} name="Statements" onClick={changeTabMenu} >Statements</button></li>
                            <li className={tabMenu.Referrals ? "nav-link-active" : null} ><button className={`btn nav-link side-nav`} name="Referrals" onClick={changeTabMenu} >Referrals</button></li>
                            <li className={tabMenu.Logs ? "nav-link-active" : null} ><button className={`btn nav-link side-nav`} name="Logs" onClick={changeTabMenu} >Logs</button></li>
                        </ul>
                        <li className='menu-item mt-3'><i className="bi bi-code-slash"></i> <span>Help</span></li>
                    </ul>
                </div>)}
            </div>
        </div>
    )
}

export default SideNavBar