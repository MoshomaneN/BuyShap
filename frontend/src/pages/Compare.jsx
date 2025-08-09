import React, { useState } from 'react';

export default function Compare() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const mockResults = [
    { name: 'Milk 1L',Type: 'Full Cream Fresh', price: 'R19.99', store: 'Pick n Pay' },
    { name: 'Milk 1L', Type: 'Full Cream Fresh', price: 'R18.49', store: 'Checkers' },
    { name: 'Milk 1L',Type: 'Full Cream Fresh', price:  'R20.00', store: 'SPAR' }
  ];

  const handleSearch = () => {
    setResults(
      mockResults.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] mb-6">
          🛒 Compare Grocery Prices
        </h1>
        <p className="text-gray-300 mb-6">
          Enter a product name to compare prices across your favorite local stores.
        </p>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="e.g., Rice, Eggs, Milk"
            className="w-full bg-gray-800 text-white border border-green-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-green-400 hover:bg-green-300 text-black px-4 py-2 rounded font-bold transition shadow-[0_0_12px_rgba(34,197,94,0.7)]"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="mt-10">
          {results.length > 0 ? (
            <div className="space-y-4">
              {results.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-green-400 rounded-lg bg-gray-800 flex justify-between items-center shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-green-300">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-400">{item.store}</p>
                  </div>
                  <span className="text-green-300 font-bold text-lg">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              <p className="italic">No results to show yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
