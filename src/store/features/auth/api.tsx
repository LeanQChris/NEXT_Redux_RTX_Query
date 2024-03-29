import { baseUrl } from "@/constants/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: baseUrl });

const authApi = createApi({
  baseQuery,
  endpoints: (build) => ({
    /**
     * Login post request
     * @param {any} {query:(loginData
     * @returns {any}
     */
    login: build.mutation<any, any>({
      query: (loginData) => ({
        url: "",
        method: "",
        body: loginData,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
