import React, { } from 'react'
import BillingAddress from './otherPages/BillingAddress'
import BillingHistory from './otherPages/BillingHistory'
import PaymentMethods from './otherPages/PaymentMethods'
import PlanValidity from './otherPages/PlanValidity'

function Billing(props) {
    const { userInfo } = props
    return (
        <>
            <PlanValidity userInfo={userInfo} />
            <PaymentMethods />
            <BillingAddress />
            <BillingHistory />
        </>
    )
}

export default Billing