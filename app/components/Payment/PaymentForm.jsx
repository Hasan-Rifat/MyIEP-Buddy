import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const createSubscription = async () => {
    try {
      const cardElement = elements.getElement(CardElement);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: name,
          email: email,
          address: {
            country: "US", // Replace with the selected country or use a user input field for dynamic selection
            // Add other address fields if needed (e.g., city, postal code)
          },
        },
      });

      if (error) {
        console.log(error);
        return;
      }

      // Rest of the code for creating subscription and confirming payment
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <input
          className="appearance-none border border-[#0000000a] rounded-[5px] w-full px-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          className="appearance-none border border-[#0000000a] rounded-[5px] w-full px-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
            },
          },
          hidePostalCode: true, // Hide the postal code field if not needed
        }}
      />
      <button onClick={createSubscription}>Subscribe</button>
    </div>
  );
};

export default PaymentForm;
