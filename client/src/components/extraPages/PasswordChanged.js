import React from 'react'
import { NavLink } from 'react-router-dom';


function PasswordChanged() {
    return (
        <div className="container bg-info mt-5 p-3">
            <div className="row  p-5">
                <div className="col-md-6 offset-md-3">
                    <div className='mt-2 justify-content-center align-items-center'>
                        <div className="card p-3 d-flex justify-content-center align-items-center">
                            <div className=' mt-3 mb-5'>
                                <h1>Password is Changed</h1>
                            </div>
                            <div className=' mb-5'>
                                <NavLink to={'/auth/login'} className='btn btn-primary'>Login</NavLink>
                            </div>
                            <div className=' mb-5'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lMPEE-zRXIng1JykGjjZHruHHRmT2IWgVQ&usqp=CAU" alt="super hand" height='200px' width='200px' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordChanged