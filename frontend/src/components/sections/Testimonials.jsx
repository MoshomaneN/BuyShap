// src/components/sections/Testimonials.jsx
import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maya J.",
    text: "I save R50 every month using BuyShap. The budget tool is brilliant!",
  },
  {
    name: "Jordan P.",
    text: "The glowing UI is 🔥 and actually helps me shop smarter.",
  },
  {
    name: "Liam W.",
    text: "Comparison across stores helped me switch to better deals instantly.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Shoppers Say
        </motion.h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 px-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <Card className="bg-black/70 border border-pink-500 text-left p-6 hover:shadow-[0_0_1rem_#FF00FF]">
              <p className="text-gray-200 italic mb-4">“{t.text}”</p>
              <p className="text-pink-400 font-bold">— {t.name}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

