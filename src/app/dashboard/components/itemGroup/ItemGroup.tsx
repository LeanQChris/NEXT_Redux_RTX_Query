"use client";

import { useGetItemGroupsQuery } from "@/store/features/dashboard/items/api";
import { Col, Row } from "antd";
import React from "react";

export default function ItemGroup() {
  const { data, isLoading, error } = useGetItemGroupsQuery("");

  let itemGroups;

  if (isLoading) return <>Loading</>;

  if (data) {
    itemGroups = data;
  }

  if (error) {
    return <p>{error.toString()}</p>;
  }

  return (
    <Row>
      {itemGroups.map((itemGroup: any, index: number) => {
        return (
          <Col span={4} key={index}>
            {itemGroup.name}
          </Col>
        );
      })}
    </Row>
  );
}
