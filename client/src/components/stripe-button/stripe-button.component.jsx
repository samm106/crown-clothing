import StripeCheckout from "react-stripe-checkout";
import React from "react";

const stripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H8L0NBjKxNn64rEY0TVMt4obv39BTlJGzOGVRpiqsouH2KA9AykWKVgRASlTHcMuPeN3HwQACl1Xhj7ilYYcGfT00hz5jGoWq";
  const onToken = (token) => {
    alert("PAYMENT SUCCESSFUL");
  };
  return (
    <div>
      <StripeCheckout
        label="pay now"
        name="CROWN CLOTHING"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default stripeCheckoutButton;
