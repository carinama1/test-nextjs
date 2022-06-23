import React from "react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function Page() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <p>Super secret page! {router.query.itemid}</p>
      ) : (
        <p>
          <p>You are not permitted to see this page.</p>
          <button onClick={signIn}>Sign in</button>
        </p>
      )}
    </>
  );
}
