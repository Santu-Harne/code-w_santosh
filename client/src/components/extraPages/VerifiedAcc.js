import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios'

function VerifiedAcc(props) {
    const params = useParams()
    const registerToken = params.registerToken

    const isVerified = async () => {
        try {
            await axios.get(`/auth/register/verify/${registerToken}`)
                .then(res => {
                    console.log('account verified')
                }).catch(err => console.log(err.message))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        isVerified()
    }, [])
    return (
        <div>
            <h1>Your Account Has Been Verified</h1>
            <NavLink to={'/auth/loginPage'}>Login Page</NavLink>
        </div>
    )
}

export default VerifiedAcc