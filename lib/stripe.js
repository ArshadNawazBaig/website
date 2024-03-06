import { loadStripe } from '@stripe/stripe-js';

export const checkout = async ({ lineItems }) => {
  console.log('checkout');
  let stripePromise = null;
  const getstripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.STRIPE);
    }
    return stripePromise;
  };
  const stripe = await getstripe();
  await stripe.redirectToCheckout({
    mode: 'subscription',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
};
