import React, { useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify';

function ResetPassword(props) {
    const navigate = useNavigate()
    const params = useParams()

    const [data, setData] = useState({
        newPassword: "",
        confirmPassword: ""
    })

    const readValue = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`/auth/resetPassword/${params.registerToken}`, data)
                .then(res => {
                    // console.log("Password reset successful")
                    toast.success(res.data.msg)
                    setData({ newPassword: "", confirmPassword: "" })
                    navigate('/auth/passwordChanged')
                }).catch(err => toast.error(err.response.data.msg))
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className=''>
            <h1 className='text-center text-info my-5'>Reset Password</h1>
            <div className="container ">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card ">
                            <div className="card-body bg-secondary rounded">
                                <form autoComplete='off' onSubmit={submitHandler}>
                                    <div className='mt-3'>
                                        <label htmlFor="newPassword">New Password</label>
                                        <input type="password" name="newPassword" id="newPassword" className='form-control' value={data.newPassword} onChange={readValue} />
                                    </div>
                                    <div className='mt-3'>
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="password" name="confirmPassword" id="confirmPassword" className='form-control' value={data.confirmPassword} onChange={readValue} />
                                    </div>
                                    <div className="mt-3">
                                        <input type="submit" value={'Submit'} className='btn btn-success mb-3' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword