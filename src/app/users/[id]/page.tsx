import React from 'react';

export default function UserProfile({ params }: { params: { id: string } }) {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">👤 User Profile</h1>
      <p className="mt-4 text-lg text-gray-700">
        Viewing profile for user: <span className="font-mono">{params.id}</span>
      </p>
    </main>
  );
}
