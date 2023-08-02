import { baseUrl, endpoints } from "@/constants/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: baseUrl });

// Client side data caching using Redux RTX Query
export const dashboardApi = createApi({
  baseQuery,
  reducerPath: "dashboardApi",
  endpoints: (build) => ({
    /**
     * Get items list
     * @param {any} {query:(
     * @returns {any}
     */
    getItemList: build.query<any, string>({ query: () => endpoints.items }),
    /**
     * Get Item Groups
     * @param {any} {query:(
     * @returns {any}
     */
    getItemGroups: build.query<any, string>({
      query: () => endpoints.itemGroups,
    }),
  }),
});

export const { useGetItemListQuery, useGetItemGroupsQuery } = dashboardApi;
