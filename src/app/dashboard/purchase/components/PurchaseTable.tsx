"use client";

import React from "react";
import { Table } from "antd";

import { usePurchaselistQuery } from "@/store/features/dashboard/purchase/api";

export default function PurchaseTable() {
  const { data, isLoading, error } = usePurchaselistQuery("");

  const columns: any = [
    {
      title: "Po No",
      dataIndex: "poNo",
    },
    { title: "Po Date", dataIndex: "poDate" },
    { title: "Arrival Date", dataIndex: "arrivalDate" },
    { title: "Supplier", dataIndex: "supplierAgentName" },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: {
        compare: (a: any, b: any) => a.quantity - b.quantity,
      },
    },
    {
      title: "Amount",
      dataIndex: "netAmount",
      sorter: {
        compare: (a: any, b: any) => a.netAmount - b.netAmount,
      },
    },
  ];

  return (
    <Table
      bordered={true}
      sticky={true}
      columns={columns}
      dataSource={data}
      loading={isLoading}
    />
  );
}
