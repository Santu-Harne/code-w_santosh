import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import '../formStyles/App.css'
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const initialState = {
  Email: "santosh.283143@gmail.com",
  Password: "santosh1234"
}

function Login() {
  const [show, setShow] = useState(false)

  const showHide = () => {
    setShow(!show)
  }

  const navigate = useNavigate()

  const [data, setData] = useState(initialState)

  const readValue = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/auth/login', data)
        .then(res => {
          // console.log("after login =", res.data)
          toast.success(res.data.msg)
          setData(initialState)
          if (res.data.msg === "Login Successful") {
            navigate('/auth/userProfile')
          }
        }).catch(err => toast.error(err.response.data.msg))
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    // console.log(data)
  }, [data])

  return (
    <div className="Auth-form-container bg-primary">
      <form className="Auth-form" autoComplete="off" >
        <div className="Auth-form-content">
          <p className="Auth-form-title text-primary">Login</p>

          <div className="form-group mt-3">
            <label>Email</label>
            <input type="email" className="form-control mt-3" name="Email" value={data.Email} onChange={readValue} placeholder="Enter email" />
          </div>
          <div className="form-group mt-3 position-relative">
            <label>Password</label>
            <input type={show ? "text" : "password"} className="form-control mt-1" name="Password" value={data.Password} onChange={readValue} placeholder="Enter password" />
            <div className="text-secondary show" >
              {show ? <i className="bi bi-eye-slash-fill " onClick={showHide}></i> : <i className="bi bi-eye-fill" onClick={showHide}></i>}
            </div>
          </div>
          <NavLink to={'/auth/forgotPassword'} className="float-end mt-2">Forgot Password</NavLink>
          <div className="gap-2 mt-3">
            <button type="submit" onClick={(e) => submitHandler(e)} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login