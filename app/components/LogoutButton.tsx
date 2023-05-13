"use client";
import { signOut } from "next-auth/react";
export default function LogoutButton() {
  const handleClick = () => {
    signOut();
  };
  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 border border-white rounded-md hover:bg-gray-100 hover:text-gray-800"
    >
      Salir
    </button>
  );
}
