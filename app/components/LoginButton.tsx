"use client";
import { signIn } from "next-auth/react";
export default function LoginButton() {
  const handleClick = () => {
    signIn("github");
  };
  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 border border-white rounded-md hover:bg-gray-100 hover:text-gray-800"
    >
      Login
    </button>
  );
}
