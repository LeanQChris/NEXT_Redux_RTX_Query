import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <>nav</>
      <section>{children}</section>
    </div>
  );
}
