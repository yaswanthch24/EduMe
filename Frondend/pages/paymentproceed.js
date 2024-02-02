import React from 'react'
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'
import { Button } from 'reactstrap';


const Paymentproceed = () => {
    const onToken = (token) =>{
        console.log(token);
    }
    const navigate = useNavigate();
    const handleHome = ()=>{
      navigate('/Homepage')
    }
  return (
    <div>
      <Button color='danger' onClick={handleHome}>Home</Button>
      <StripeCheckout
      token={onToken}
      name='Transcation'
      currency='USD'
      stripeKey='pk_test_51OAXfXSG7kAiu8f1HmjK0rZpRQ7DqyZHDWFAYBnHYVhjVTOcs3jBb7md4bSDeud5LMlHGPuVBY7FFAEylujMeEJS00iXo49nvV'
      />
    </div>
  )
}

export default Paymentproceed
