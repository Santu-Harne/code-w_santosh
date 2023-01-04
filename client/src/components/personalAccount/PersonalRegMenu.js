import React, { useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom"

function PersonalRegMenu() {

  const [details, setDetails] = useState(false)

  const navigate = useNavigate()

  const googleRegister = useGoogleLogin({
    onSuccess: async response => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${response.access_token}`
          }
        })
        setDetails(res.data)
        console.log(res.data.email)
        window.location.href = `/AccountInfoGoogle/${res.data.name}/${res.data.email}`
        // navigate('/register')

      } catch (error) {
        console.log(error)
      }

    }
  });

  return (
    <div className="container " style={{ backgroundImage: "url(https://www.athletadesk.com/wp-content/uploads/2016/08/join-background.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="row  ">
        <div className="col-md-12 ">
          <div className="card" >
            <div className="row" style={{ height: "650px", width: "100%" }}>
              <div className="col-md-6 mb-5 mt-5 offset-3">
                <div className="card-header bg-info text-dark mt-5">
                  <h3 className="text-center mt-3">Register With</h3>
                </div>
                <div className="card-body ">
                  <button className="btn btn-outline-info mb-3 form-control fs-4" onClick={() => { navigate("/AccountInfo") }}><i className="bi bi-wordpress me-4 fs-4"></i>Sign up with Code W</button>
                  <button className="btn btn-outline-info mb-3 form-control fs-4" onClick={googleRegister}><i className="bi bi-google me-4 fs-4"></i>Sign up with Google</button>
                  <button className="btn btn-outline-info mb-3 form-control fs-4" onClick={() => { navigate("/linkedin") }}><i className="bi bi-linkedin me-4 fs-4"></i>Sign up with LinkedIn</button>
                  <button className="btn btn-outline-info mb-3 form-control fs-4" onClick={() => { navigate("/Code S") }}><i className="bi bi-stripe me-4  fs-4"></i>Sign up with Code S</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalRegMenu