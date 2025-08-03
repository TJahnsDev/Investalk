import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="text-xl font-bold text-blue-600">Investalk</div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link href="/feed" className="text-gray-700 hover:text-blue-500">Feed</Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        <Link href="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
        <Link href="/signup" className="text-gray-700 hover:text-blue-500">Signup</Link>
      </div>
    </nav>
  );
}
