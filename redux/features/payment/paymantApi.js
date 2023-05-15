import apiSlice from "../api/apiSlice";

const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all subscriber api
    getPayment: builder.query({
      query: () => ({
        url: "payment",
        method: "GET",
      }),
    }),
    getPaymentByEmail: builder.query({
      query: (email) => ({
        url: `payment/${email}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPaymentQuery, useGetPaymentByEmailQuery } = paymentApi;
