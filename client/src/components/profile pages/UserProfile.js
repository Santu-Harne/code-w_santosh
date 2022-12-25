import React, { } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

function UserProfile(props) {
    const navigate = useNavigate()

    const logoutHandler = async (e) => {
        e.preventDefault()
        if (window.confirm("Are sure to logout..??")) {
            try {
                await axios.get('/auth/logout')
                    .then(res => {
                        // console.log("Logout successful")
                        toast.success(res.data.msg)
                        navigate('/')
                    }).catch(err => console.log(err.message))
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return (
        <div>
            <h3>User Profile</h3>
            <h1>Welcome Buddy</h1>
            <button className='btn btn-secondary' onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default UserProfile