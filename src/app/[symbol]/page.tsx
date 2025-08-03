import React from 'react';

export default function TickerPage({ params }: { params: { symbol: string } }) {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">💹 Ticker: {params.symbol.toUpperCase()}</h1>
      <p className="mt-4 text-lg text-gray-700">
        Chat and data for this ticker will go here.
      </p>
    </main>
  );
}
