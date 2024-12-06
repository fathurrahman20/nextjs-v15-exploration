"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUsersPage = () => {
  const router = useRouter();
  return (
    <>
      <div>New Users Page</div>
      <button onClick={() => router.push("/users")} className="btn btn-primary">
        Create User
      </button>
    </>
  );
};

export default NewUsersPage;
