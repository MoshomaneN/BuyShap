// src/components/sections/Features.jsx
import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, ShoppingCart, Wallet } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart size={32} className="text-cyan-400" />,
    title: "Real-Time Grocery Comparison",
    description: "Get instant prices from multiple stores near you and online.",
  },
  {
    icon: <Wallet size={32} className="text-pink-400" />,
    title: "Smart Budget Planning",
    description: "Enter your budget and we'll guide you to savings.",
  },
  {
    icon: <Sparkles size={32} className="text-purple-400" />,
    title: "AI-Driven Recommendations",
    description: "Let AI suggest the best products within your goals.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why BuyShap?
        </motion.h2>
        <p className="mt-4 text-gray-400">
          Maximize your savings with power of AI
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="text-center space-y-4 bg-gradient-to-br from-black to-purple-950/40 hover:shadow-[0_0_1rem_#FF00FF]">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

