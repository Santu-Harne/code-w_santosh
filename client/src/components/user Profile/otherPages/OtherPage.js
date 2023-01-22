import React, { } from 'react'

function OtherPage(props) {
    const content = props.text

    return (
        <div className='container'>
            <div className="row">
                <div className="col px-0">
                    <div className="card" >
                        <div className="card-body">
                            <h1 className='text-info'>{content}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherPage