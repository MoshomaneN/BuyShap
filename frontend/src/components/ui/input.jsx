// src/components/ui/input.jsx
import React from "react";

export function Input(props) {
  return (
    <input
      {...props}
      className="w-full px-4 py-2 rounded-lg bg-black/60 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
    />
  );
}

