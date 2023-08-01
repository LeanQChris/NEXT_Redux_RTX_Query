"use client";

import { useGetItemListQuery } from "@/store/features/dashboard/items/api";
import { Col, Row } from "antd";
import React from "react";

export default function Item() {
  const {
    data,
    isLoading: itemsLoading,
    error: itemsError,
  } = useGetItemListQuery("");

  let items;

  if (itemsLoading) return <>Loading</>;

  if (data) {
    items = data;
  }

  if (itemsError) {
    return <p>{itemsError.toString()}</p>;
  }

  return (
    <Row>
      {items.map((item: any, index: number) => {
        return (
          <Col style={{ padding: "5px" }} span={4} key={index}>
            {item.itemName}
          </Col>
        );
      })}
    </Row>
  );
}
