"use client";

import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <div className="px-2 overflow-hidden">{children}</div>;
}
