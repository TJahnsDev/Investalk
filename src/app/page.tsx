import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-br from-gray-100 to-white">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-sm">
        Investalk
      </h1>
      <p className="text-xl text-gray-600 max-w-xl mb-8">
        A place where retail traders gather to share plays, break down charts, and ride the waves of the market together.
      </p>
      <Link
        href="/signup"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        Join the Movement
      </Link>
      <p className="mt-4 text-sm text-gray-400">Already a member? <Link href="/login" className="underline hover:text-blue-600">Log in</Link></p>
    </main>
  );
}
