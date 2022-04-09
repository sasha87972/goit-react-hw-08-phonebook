import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const phonebookApi = createApi({
  reducerPath: "phonebookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6249e9d6852fe6ebf88215c0.mockapi.io/",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: (contactData) => ({
        url: "/contacts",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;
