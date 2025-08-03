import React from "react";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">🔍 About Investalk</h1>
      <p className="text-lg text-gray-700 mb-6">
        Investalk is a social platform for everyday traders. Our mission is to empower independent investors through shared insights, real-time discussions, and transparent sentiment.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md border text-left space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">💡 Why We Exist</h2>
          <p className="text-gray-600 mt-1">
            The world of investing is noisy. We bring structure to that chaos by giving traders a place to talk by ticker, track trends, and learn together — without hype.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">🤝 What We Believe</h2>
          <ul className="list-disc list-inside text-gray-600 mt-1">
            <li>Retail traders are stronger when they collaborate</li>
            <li>Transparency beats gatekeeping</li>
            <li>Every voice matters — from beginners to pros</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">🚀 Where We're Going</h2>
          <p className="text-gray-600 mt-1">
            We’re building the most focused community for real-time market talk — with tools, charts, and sentiment tracking that actually help.
          </p>
        </div>
      </div>
    </main>
  );
}
