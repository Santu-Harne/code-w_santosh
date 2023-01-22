import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Profile from './Profile';
import OtherPage from './otherPages/OtherPage';
import Billing from './Billing';
import SideNavBar from './SideNavBar/SideNavBar';
import Footer from './Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'



function UserProfile(props) {
    const [userInfo, setUserInfo] = useState({})
    const [isExpended, setIsExpended] = useState(false);
    const [tabMenu, setTabMenu] = useState({ Billing: true })
    const params = useParams()
    const email = params.email

    const changeTabMenu = async (e) => {
        const name = e.target.name;
        setTabMenu({ [name]: true })
    }

    const getInfo = async () => {
        await axios.get(`/auth/getuser/${email}`)
            .then(res => {
                // console.log(res.data.data);
                setUserInfo(res.data.data)
            }).catch(err => console.log(err.message))
    }

    useEffect(() => {
        getInfo()
    }, [])
    return (
        <div className='d-flex user-profile'>
            <div>
                <SideNavBar isExpended={isExpended} setIsExpended={setIsExpended} tabMenu={tabMenu} changeTabMenu={changeTabMenu} />
            </div>
            <div style={{ marginInline: 'auto', width: "100%" }} className='right-side' >
                <NavBar userInfo={userInfo} isExpended={isExpended} setIsExpended={setIsExpended} />
                <Profile isExpended={isExpended} setIsExpended={setIsExpended} userInfo={userInfo} tabMenu={tabMenu} changeTabMenu={changeTabMenu} />
                <Footer />
            </div>
        </div>
    )
}

export default UserProfile