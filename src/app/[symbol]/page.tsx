// src/app/[symbol]/page.tsx

import { createClient } from "../../utils/supabaseClient";
import { cookies } from "next/headers";
import TradingViewWidget from "../../components/TradingViewWidget";
import { Database } from "../../types/supabase";

type Post = Database["public"]["Tables"]["posts"]["Row"];

export default async function TickerPage({ params }: { params: { symbol: string } }) {
  const supabase = await createClient();
  const symbol = params.symbol.toUpperCase();

  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("ticker", symbol)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen px-4 py-8 bg-gray-50 sm:px-6 lg:px-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <header>
          <h1 className="text-3xl font-bold text-gray-800">#{symbol}</h1>
          <p className="text-gray-500 text-sm">Live chart and community posts</p>
        </header>

        <div className="rounded-xl overflow-hidden shadow">
          <TradingViewWidget symbol={symbol} />
        </div>

        <section className="space-y-4">
          {error && <p className="text-red-500 text-sm">Failed to load posts: {error.message}</p>}
          {posts?.length === 0 && <p className="text-gray-500 text-sm">No posts for this ticker yet.</p>}

          {posts?.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-xl shadow border border-gray-200"
            >
              <div className="text-sm text-gray-800 font-semibold">@user</div>
              <p className="text-gray-700 mt-1 text-sm">{post.content}</p>
              <div className="text-xs text-gray-400 mt-2">
                {new Date(post.created_at!).toLocaleString()}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
