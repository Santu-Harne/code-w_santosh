import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Success(props) {

    const [googleName, setGoogleName] = useState('')
    const [googleImg, setGoogleImg] = useState('')
    const [googleEmail, setGoogleEmail] = useState('')

    const getUser = async () => {
        await axios.get('/socialLogin/login/success')
            .then(res => {
                setGoogleEmail(res.data.user.emails[0].value)
                setGoogleImg(res.data.user.photos[0].value)
                setGoogleName(res.data.user.displayName)

                console.log(res.data.user);
                // console.log(res.data.user.emails[0].value);

            }).catch(err => console.log(err))
    }

    const logout = () => {
        window.open("http://localhost:7000/socialAuth/logout", "_self")
    }
    useEffect(() => {
        getUser()
    }, [])

    const readValue = (e) => {
        e.preventDefault()
        const { value } = e.target
        setGoogleName(value)
    }
    return (
        <div>
            <h1>Login Success</h1>
            <img src={googleImg} alt="Profile Image" className='rounded-circle' />
            <h3>Name : {googleName}</h3>
            <h3>Email : {googleEmail}</h3>
            <h3>Image : {googleImg}</h3>
            <button onClick={logout} className='btn btn-secondary'>LogOut</button>

            <div className="col-md-6">
                <form autoComplete='off'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={readValue} value={googleName} className="form-control" />
                    <label htmlFor="email">Email</label>
                    <input type="text" email="email" id="email" onChange={readValue} value={googleEmail} className="form-control" readOnly />
                </form>
            </div>
        </div>
    )
}

export default Success