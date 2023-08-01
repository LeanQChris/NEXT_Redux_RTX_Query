import { baseUrl, endpoints } from "@/constants/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: baseUrl });

export const dashboardApi = createApi({
  baseQuery,
  endpoints: (build) => ({
    getItemList: build.query<any, string>({ query: () => endpoints.items }),
    getItemGroups: build.query<any, string>({
      query: () => endpoints.itemGroups,
    }),
  }),
  reducerPath: "dashboardApi",
});

export const { useGetItemListQuery, useGetItemGroupsQuery } = dashboardApi;
