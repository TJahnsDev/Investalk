// src/app/feed/page.tsx
import React from "react";
import Link from "next/link";

export default function FeedPage() {
  const mockPosts = [
    {
      id: 1,
      username: "stockhunter99",
      ticker: "AUUD",
      content: "This thing is gearing up for a breakout 🔥",
      timestamp: "2h ago",
    },
    {
      id: 2,
      username: "warhawkTrades",
      ticker: "CYCN",
      content: "Cup-and-handle setup confirmed. Entry 1.84 🚀",
      timestamp: "4h ago",
    },
    {
      id: 3,
      username: "chartqueen",
      ticker: "PSTV",
      content: "Loaded 10k shares, high risk high reward 🧨",
      timestamp: "6h ago",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fb] px-4 py-6 sm:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Live Feed</h1>
          <p className="text-gray-500 text-sm">See what the community is trading and thinking</p>
        </header>

        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tickers, users..."
            className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Trending tickers */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Trending Tickers</h2>
          <div className="flex gap-3 flex-wrap">
            {["AUUD", "PSTV", "CYCN", "TALL", "NVDA"].map((symbol) => (
              <Link
                key={symbol}
                href={`/${symbol}`}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200"
              >
                #{symbol}
              </Link>
            ))}
          </div>
        </section>

        {/* Post feed */}
        <section className="space-y-6">
          {mockPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-800">@{post.username}</span>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
              </div>
              <Link
                href={`/${post.ticker}`}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                #{post.ticker}
              </Link>
              <p className="text-gray-700 mt-1">{post.content}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
