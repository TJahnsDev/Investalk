import React from "react";

export default function UserProfile({ params }: { params: { id: string } }) {
  const posts = [
    {
      id: 1,
      content: "Just entered AUUD at $1.49 — looking for a squeeze 🔥",
      ticker: "AUUD",
      timestamp: "3h ago",
    },
    {
      id: 2,
      content: "Watching TSLA hold above 200-day. Long bias still strong.",
      ticker: "TSLA",
      timestamp: "1d ago",
    },
  ];

  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          {params.id.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">@{params.id}</h1>
          <p className="text-gray-500 text-sm">Joined recently • 2 posts</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">📢 Recent Posts</h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white border rounded-lg p-4 shadow-sm">
            <p className="text-gray-800">{post.content}</p>
            <div className="text-sm text-gray-500 mt-1">
              #{post.ticker} • {post.timestamp}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
