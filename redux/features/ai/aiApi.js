import { apiSlice } from "../api/apiSlice";

export const aiApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /*
     * get root api
     */
    //  get all goals =>
    getAllGoals: builder.query({
      query: (email) => ({
        url: `user-data/${email}`,
        method: "GET",
      }),
      providesTags: ["goals"],
    }),

    // get by id && email =>
    getGoalById: builder.query({
      query: ({ email, id }) => ({
        url: `user-data/${email}/${id}`,
        method: "GET",
      }),
    }),

    //user goal name create =>
    createUserData: builder.mutation({
      query: ({ name, email }) => ({
        url: `user-data/${email}`,
        method: "POST",
        body: { name, email },
      }),
      onQueryStarted: (arg, { dispatch, queryFulfilled }) => {},
    }),

    // delete goal =>
    deleteGoal: builder.mutation({
      query: ({ email, id }) => ({
        url: `user-data/${email}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["goals"],
    }),

    /*
     *! goal create api
     */
    // goal text generate =>
    generateGoalText: builder.mutation({
      query: ({ prompt1, prompt2 }) => ({
        url: `user-data/goal-generate-text`,
        method: "POST",
        body: { prompt1, prompt2 },
        onQueryStarted: (arg, { dispatch, queryFulfilled }) => {
          console.log(arg);
        },
      }),
    }),
    // goal create =>
    createGoal: builder.mutation({
      query: ({ goal, prompt1, prompt2, id }) => ({
        url: `user-data/goal-create/${id}`,
        method: "PUT",
        body: { goal, prompt1, prompt2 },
      }),
    }),

    /*
     *! accommodations create api =>
     */
    generateAccommodationText: builder.mutation({
      query: ({ prompt1, prompt2 }) => ({
        url: `user-data/accommodations-generate-text`,
        method: "POST",
        body: { prompt1, prompt2 },
      }),
    }),

    createAccommodation: builder.mutation({
      query: ({ accommodations, prompt1, prompt2, id }) => ({
        url: `user-data/accommodations-create/${id}`,
        method: "PUT",
        body: { accommodations, prompt1, prompt2 },
      }),
    }),

    /*
     *! present create api
     */
    generatePresentText: builder.mutation({
      query: ({ prompt1, prompt2, prompt3 }) => ({
        url: `user-data/present-generate-text`,
        method: "POST",
        body: { prompt1, prompt2, prompt3 },
      }),
    }),

    createPresent: builder.mutation({
      query: ({ present, prompt1, prompt2, prompt3, id }) => ({
        url: `user-data/present-create/${id}`,
        method: "PUT",
        body: { present, prompt1, prompt2, prompt3 },
      }),
    }),
  }),
});

export const {
  useGetAllGoalsQuery,
  useCreateUserDataMutation,
  useGenerateGoalTextMutation,
  useCreateGoalMutation,
  useDeleteGoalMutation,
  useGenerateAccommodationTextMutation,
  useCreateAccommodationMutation,
  useGeneratePresentTextMutation,
  useCreatePresentMutation,
  useGetGoalByIdQuery,
} = aiApi;
