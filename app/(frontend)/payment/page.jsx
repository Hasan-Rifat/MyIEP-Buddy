"use client";
import PaymentForm from "@/app/components/Payment/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Replace 'YOUR_STRIPE_PUBLISHABLE_KEY' with your actual Stripe publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Payment;
