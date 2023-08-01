"use client";

import { styled } from "styled-components";
import ItemGroup from "./dashboard/components/itemGroup/ItemGroup";
import Item from "./dashboard/components/items/Item";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <ItemGroup />
      <Item />
    </HomeWrapper>
  );
}
