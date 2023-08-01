"use client";

import React from "react";
import { Provider } from "react-redux";
import { stores } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={stores}>{children}</Provider>;
}
