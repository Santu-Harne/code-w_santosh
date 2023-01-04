import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify';

function UserProfile(props) {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const params = useParams()

    const iniFetch = async () => {
        await axios.get(`/auth/getUser/${params.email}`)
            .then(res => {
                setUser(res.data.data)
                // console.log(res.data.data)
            }).catch(err => console.log(err.message))
    }

    useEffect(() => {
        iniFetch()

    }, [])
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
        <div className='text-center'>
            <h1 className='text-info'>User Profile</h1>
            <h2>Welcome {user.Name}</h2>
            <h3>Email : {user.Email}</h3>
            <h3>Account_Type : {user.Account_Type}</h3>
            <button className='btn btn-secondary' onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default UserProfile