import React, { } from 'react'
import './Navbar.css'

function Footer(props) {
    return (
        <div className="bg-light mt-3 shadow-lg">
            <div className="container p-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className='py-3 d-flex justify-content-between footer-bar'>
                            <span className='mb-0'>2022&#169;<a href="#" className='text-decoration-none ps-1 text-dark'>Keenthemes</a></span>
                            <ul className="mb-0">
                                <a href="#" className='text-decoration-none text-secondary ps-2'>About</a>
                                <a href="#" className='text-decoration-none text-secondary ps-2'>Purchase</a>
                                <a href="#" className='text-decoration-none text-secondary ps-2'>Support</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer