import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JihXmIMIIBe0WQhTrVbuwNCybzIhVKWDv3Irc13tWmOWIcluxeIcEwEimB0xGC0F8rtTmm9xDJ12Cimrd4IXNNO00FahySVCD';
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(res => {
            alert('Payment successful')
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err))
            alert('Issue with payment')
        })
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total value is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;