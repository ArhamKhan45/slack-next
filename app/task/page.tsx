"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Test() {
  const tasks = useQuery(api.task.get);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </main>
  );
}