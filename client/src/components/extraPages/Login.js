import React, { useState, useEffect } from "react"
import { useGoogleLogin } from '@react-oauth/google';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import "bootstrap/dist/css/bootstrap.min.css"
import '../formStyles/App.css'
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


const initialState = {
  Email: "",
  Password: ""
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
          navigate(`/auth/userProfile/${data.Email}`)
          setData(initialState)
        }).catch(err => toast.error(err.response.data.msg))
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    // console.log(data)
  }, [data])

  const googleLogin = useGoogleLogin({
    onSuccess: async response => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${response.access_token}`
          }
        })
        // console.log(res.data.email)
        await axios.get(`/auth/getUser/${res.data.email}`)
          .then(res => {
            if (res.data.data) {
              // console.log(res.data.data)
              const userData = res.data.data
              toast.success("Login Successfully")
              navigate(`/auth/userProfile/${userData.Email}`)
            }
            else {
              toast.error("This account is not registered with CODE-W")
            }
          }).catch(err => toast.error("This account is not registered with CODE-W"))

      } catch (error) {
        console.log(error)
      }

    }
  });

  const { linkedInLogin } = useLinkedIn({
    clientId: '76712a7bf206585eb460',
    redirectUri: `/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="Auth-form-container bg-primary" style={{ backgroundImage: "url(https://wallup.net/wp-content/uploads/2016/03/10/321535-photography-landscape-nature-night-field-trees.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <form className="Auth-form bg-info pb-5" autoComplete="off" >
        <div className="Auth-form-content ">
          <p className="Auth-form-title text-dark">Login</p>

          <div className="form-group mt-3">
            <label>Email :</label>
            <input type="email" className="form-control mt-1" name="Email" value={data.Email} onChange={readValue} placeholder="Enter email" />
          </div>
          <div className="form-group mt-3">
            <label>Password :</label>
            <input type="password" className="form-control mt-1" name="Password" value={data.Password} onChange={readValue} placeholder="Enter password" />
            <NavLink to={'/auth/forgotPassword'} className="float-end mt-2 text-dark ">Forgot Password</NavLink>
          </div>

          <div className="gap-2 mt-3">
            <button type="submit" onClick={(e) => submitHandler(e)} className="btn btn-success">
              Submit
            </button>
          </div>
          <hr />
          <div className="row  ">
            <div className="d-grid col-md-12 gap-3 ">
            </div>
            <div className="d-grid col-md-12 gap-3 pt-3 ">
              <button type="button" className="btn btn-outline-dark form-control" onClick={googleLogin}><i className="bi bi-google me-4"></i>Sign in with google</button>
              <button type="button" className="btn btn-outline-dark form-control" onClick={linkedInLogin}><i className="bi bi-linkedin me-4"></i>Sign in with LinkedIn</button>
              <button type="button" className="btn btn-outline-dark form-control" onClick={() => { navigate("/Code S") }}><i className="bi bi-stripe me-4 "></i>Sign in with Code S</button>
            </div>
          </div>
        </div>

      </form>

    </div>
  )
}

export default Login