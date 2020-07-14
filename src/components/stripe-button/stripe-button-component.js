import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51H4jySC5c2X6kNOFVIoZrGXwJ7yh3IuPqi8I8Is7AG8MuEloQfN062UjXImwVKmtwvZ5sERD0mioD9WC04fftWxv00olzhrttd"

    const onToken = (token) => {
        alert("Payment successful")
    }

    return(
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;