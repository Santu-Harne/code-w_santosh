import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
    Email: '',
    Name_On_Card: '',
    Card_Type: '',
    Card_Number: '',
    Expire_Date: '',
}

function AddCard(props) {
    const [cardDetails, setCardDetails] = useState(initialState)

    const params = useParams()
    const navigate = useNavigate()
    const email = params.email

    const readValue = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setCardDetails({ ...cardDetails, [name]: value, Email: email })
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        await axios.post('/auth/userProfile/addcard', cardDetails)
            .then(res => {
                // console.log(res.data);
                toast.success(res.data.msg)
                setCardDetails(initialState)
                navigate(`/userProfile/${email}`)
            }).catch(err => console.log(err.message))
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2 className="text-info">Add Card</h2>
                        </div>
                        <div className="card-body p-4">
                            <form action="" autoComplete='off'>
                                <div className="form-group mb-3">
                                    <label htmlFor="Name_On_Card" className='form-label'>Name_On_Card</label>
                                    <input type="text" name="Name_On_Card" id="Name_On_Card" className='form-control' value={cardDetails.Name_On_Card} onChange={readValue} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="Card_Type" className='form-label'>Card_Type</label>
                                    <select name="Card_Type" id="Card_Type" className='form-control' value={cardDetails.Card_Type} onChange={readValue}>
                                        <option value="" disabled>Select</option>
                                        <option value="Visa">Visa</option>
                                        <option value="Mastercard">Mastercard</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="Card_Number" className='form-label'>Card_Number</label>
                                    <input type="text" name="Card_Number" id="Card_Number" className='form-control' value={cardDetails.Card_Number} onChange={readValue} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="Expire_Date" className='form-label'>Expire_Date</label>
                                    <input type="text" maxLength="5" name="Expire_Date" id="Expire_Date" className='form-control' value={cardDetails.Expire_Date} onChange={readValue} />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="Submit" value={'Add Card'} className='btn btn-success' onClick={submitHandler} readOnly />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCard