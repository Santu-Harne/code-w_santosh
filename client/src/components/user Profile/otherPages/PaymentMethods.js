import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './PaymentMethods.css'
import visaImg from '../../../assets/images/visa.png'
import ExpressCardImg from '../../../assets/images/American-Express.png'
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PaymentMethods(props) {

    const [myCards, setMyCards] = useState([])
    const [card, setCard] = useState(true)
    const [paypal, setPaypal] = useState(false)

    const params = useParams()
    const navigate = useNavigate()
    const email = params.email

    const cardSet = () => {
        setCard(true)
        setPaypal(false)
    }
    const paypalSet = () => {
        setCard(false)
        setPaypal(true)
    }
    useEffect(() => {


    }, [myCards])

    const deleteCard = (id) => {
        // window.alert(`user Id : ${id}`)
        if (window.confirm(`Are you sure you want to delete card`)) {
            axios.delete(`/auth/userProfile/deletecard/${id}`)
                .then(res => {
                    toast.success(res.data.msg)
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                }).catch(err => console.log(err.message))
        }
    }
    const iniFetch = async () => {
        await axios.get(`/auth/userProfile/getcards/${email}`)
            .then(res => {
                // console.log(res.data.data)
                setMyCards(res.data.data)
            }).catch(err => console.log(err.message))
    }
    useEffect(() => {
        iniFetch()
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 px-0">
                    <div className="card mt-3">
                        <div className="card-header py-0 ps-4 d-flex justify-content-between flex-wrap align-items-center">
                            <p className='fw-bold pt-3'>Payment Methods {card ? "(Card)" : null} {paypal ? "(Paypal)" : null}</p>
                            <ul className={`nav justify-content-end`}>
                                <li className={`${card ? 'active-view' : null}  nav-item text-secondary `} onClick={cardSet}>Credit/Debit</li>
                                <li className={`${paypal ? 'active-view' : null}  nav-item text-secondary`} onClick={paypalSet}>Paypal</li>
                            </ul>
                        </div>
                        <div className="card-body px-4 pt-4">
                            <p className='fw-bold mb-0'>My Cards</p>
                            <div className="row">
                                {
                                    myCards && myCards.map((item, index) => {
                                        let originalString = item.Card_Number;
                                        let replacementString = '****';
                                        let newString = replacementString + originalString.substr(4)
                                        return (
                                            <div key={index} className="col-md-6 mt-3">
                                                <div className='address-card rounded p-4 '>
                                                    <p>{item.Name_On_Card} {index === 0 ? (<span>Primary</span>) : null}</p>
                                                    <div className='d-flex justify-content-between flex-wrap'>
                                                        <div className='d-flex card-number'>
                                                            <img className={`${item.Card_Type === 'Visa' ? "card-image" : "card-image1"} rounded`} src={item.Card_Type == 'Visa' ? visaImg : ExpressCardImg} alt="Visa Card" />
                                                            <div className='ms-3'>
                                                                <p className='m-0'>{item.Card_Type} {newString}</p>
                                                                <span>Card expires at {item.Expire_Date}</span>
                                                            </div>
                                                        </div>
                                                        <div className='mt-2'>
                                                            <button type='button' className='btn btn-sm' onClick={() => deleteCard(item.Id)}>Delete</button>
                                                            <button className='btn btn-sm' onClick={() => navigate(`/userProfile/editCard/${email}/${item.Id}`)}>Edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                                <div className="col-md-6 mt-3">
                                    <div className='add-address rounded p-4'>
                                        <p className='m-0'>Important note!</p>
                                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                            <p className='mb-0 text-secondary'>Please carefully read <a className='text-primary' href='#' >Product Terms</a>  adding <br /> your new payment card</p>
                                            <button className='btn btn-sm add-btn btn-primary' onClick={() => navigate(`/userProfile/addCard/${email}`)}>Add Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PaymentMethods