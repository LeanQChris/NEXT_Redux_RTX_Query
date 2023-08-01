"use client";

import {
  useGetItemGroupsQuery,
  useGetItemListQuery,
} from "@/store/features/dashboard/items/api";

export default function Home() {
  const { data, isLoading, error } = useGetItemGroupsQuery("");
  const {
    data: items,
    isLoading: itemsLoading,
    error: itemsError,
  } = useGetItemListQuery("");

  let itemGroups;

  if (isLoading) return <>Loading</>;

  if (data) {
    itemGroups = data;
  }

  if (error) {
    return <p>{error.toString()}</p>;
  }

  return (
    <>
      {itemGroups.map((itemGroup: any, index: number) => {
        return <p key={index}>{itemGroup.name}</p>;
      })}
    </>
  );
}
