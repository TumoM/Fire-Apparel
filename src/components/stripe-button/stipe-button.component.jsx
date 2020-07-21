import React from "react";
import dotenv from "dotenv";
import StripeCheckout from "react-stripe-checkout";

dotenv.config()


const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100 //convert price into cents
	const publishableKey = process.env.STRIPE_KEY
	console.log(`${publishableKey}`)
	
	const onToken = token => {
		console.log(token)
		alert('Payment Done!')
	}
	
	return(
		<StripeCheckout
			label={'Pay Now'}
		name={'Fire Apparel Co'}
		billingAddress
		shippingAddress
		image={'https://svhshare.com/i/CUz.svg'}
		description={`Your toal is $${price}`}
		amount={priceForStripe}
			panelLabel={'Pay Now'}
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
	
}

export default StripeCheckoutButton;
