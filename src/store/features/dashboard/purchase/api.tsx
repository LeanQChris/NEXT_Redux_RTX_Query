import { baseUrl, endpoints } from "@/constants/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: baseUrl, headers: {} });

export const purchaseApi = createApi({
  baseQuery,
  reducerPath: "purchaseApi",
  endpoints: (build) => ({
    /**
     * Get items list
     * @param {any} {query:(
     * @returns {any}
     */
    purchaselist: build.query<any, string>({
      query: () => endpoints.purchases,
    }),
  }),
});

export const { usePurchaselistQuery } = purchaseApi;
