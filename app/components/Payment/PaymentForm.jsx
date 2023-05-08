"use client";
/* 
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const createSubscriptions = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card"), // CardElement
      });
      const response = await fetch("http://localhost:5000/api/v1/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });
      if (!response.ok) {
        alert("payment failed");
      }

      const data = await response.json();

      const confirm = await stripe.confirmCardPayment(data.clientSecret);

      if (confirm.error) {
        alert(confirm.error.message);
      }

      alert("payment successful");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="mb-6">
        <input
          className="appearance-none border border-[#0000000a] rounded-[5px] w-full px-[19px] py-[14px] text-[#5D7183] placeholder-[#5D7183] leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="name"
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
      <CardElement />
      <button onClick={createSubscriptions}>subscribe</button>
    </div>
  );
};

export default PaymentForm; */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      const response = await fetch("http://localhost:5000/api/v1/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });

      if (!response.ok) {
        alert("Payment failed");
        return;
      }

      const data = await response.json();

      const { clientSecret } = data;

      const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.paymentMethod.id,
      });

      if (confirmPayment.error) {
        alert(confirmPayment.error.message);
      } else {
        alert("Payment successful");
      }
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
      <CardElement />
      <button onClick={createSubscription}>Subscribe</button>
    </div>
  );
};

export default PaymentForm;

/* module.exports.subscriptionPayment = async (req, res) => {
  const { name, email, paymentMethod } = req.body;

  try {
    // Create a customer
    const customer = await stripe.customers.create({
      name,
      email,
      payment_method: paymentMethod,
      invoice_settings: {
        default_payment_method: paymentMethod,
      },
    });

    // Create a price for the subscription
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: 1000,
      recurring: {
        interval: "month",
      },
      product: {
        name: "Subscription",
        description: "Monthly subscription or yearly subscription",
      },
    });

    // Create a subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: price.id,
        },
      ],
      expand: ["latest_invoice.payment_intent"],
    });

    // Send back the client secret and subscription ID
    res.status(200).json({
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      message: "Subscription success",
      subscriptionId: subscription.id,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
 */
