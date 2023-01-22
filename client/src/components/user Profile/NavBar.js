import React, { } from 'react'
import './Navbar.css'

function NavBar(props) {
    const { isExpended, setIsExpended, userInfo } = props
    return (

        <nav className={`${isExpended ? 'isExpended' : null} navbar navbar-expand-sm shadow-lg header-nav`}>
            <div className="container px-0">
                <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className={`${isExpended ? null : 'ps-5'} navbar-nav`}>
                        <li className="nav-item">
                            <a className="nav-link active ps-0" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-search"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-soundwave"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-x-diamond-fill"></i>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link position-relative" href="#">
                                <span className='chat-online'></span>
                                <i className="bi bi-chat-left-text-fill"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-grid-fill"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-sun-fill"></i>
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <img src={userInfo.Image} alt="Dev img" />
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default NavBar