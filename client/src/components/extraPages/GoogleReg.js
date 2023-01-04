import React, { } from 'react'
import { useNavigate } from 'react-router-dom';


function GoogleReg(props) {
    const navigate = useNavigate()

    const googleLogin = async (e) => {
        window.open("http://localhost:7000/socialAuth/google", "_self")
        // navigate('/AccountInfo')
    }

    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-3">
                    <i className="bi bi-google me-4 btn btn-outline-primary display-inline" onClick={googleLogin}>Sign in with google</i>
                </div>
            </div>
        </div>
    )
}

export default GoogleReg