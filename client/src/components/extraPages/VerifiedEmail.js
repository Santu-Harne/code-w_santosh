import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from "axios"
import '../formStyles/verify.css'


const VerifiedEmail = () => {
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
        <div className='container verified-acc mt-5'>
            <div className="row">
                <div className="col-md-6 ">
                    <div className='card'>
                        <div className="card-body">
                            <form className='verifyForm' style={{ background: "radial-gradient(ellipse at top right,gold,deepskyblue)" }}>
                                <div className='vrfyEmail text-center'>
                                    <h1 >Your Account Is Verified <i className="bi bi-check-circle text-primary"></i></h1>
                                </div>
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCBdmhjfoxNof1sRi7CXpXvf_dxi1Mclk-w&usqp=CAU" alt="Verified Account" />
                                </div>
                                <div className='nextBtn'>
                                    <NavLink to={'/auth/login'} className="btn btn-primary nxt">Login</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifiedEmail