"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { useQuery, Authenticated, Unauthenticated  } from "convex/react";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany);
  
  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <UserButton />
          <div className="max-w-sm w-full mx-auto">
            {JSON.stringify(users, null, 2)}
          </div>
        </div> 
      </Authenticated>
      <Unauthenticated>
        <p>Must be signed in.</p>
        <SignInButton>Sign In</SignInButton>
      </Unauthenticated>
    </>
  )
}
