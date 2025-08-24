"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      <UserButton />
      <OrganizationSwitcher hidePersonal/>
      <div className="max-w-sm w-full mx-auto">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  )
}
