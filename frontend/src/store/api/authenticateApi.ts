import { createApi } from "@reduxjs/toolkit/query/react";

import { customBaseQuery } from "./customBaseQuery";

export const authenticateApi = createApi({
  reducerPath: "authenticateApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ login, password }) => ({
        url: "auth/authenticate/",
        method: "POST",
        body: {
          login,
          password,
          app: "atlas",
          platform: "ios",
        },
      }),
      transformResponse: (result: any) => result,
    }),
  }),
});

export const { useLoginMutation } = authenticateApi;
