import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          BuyShap
        </motion.h1>

    <div className="flex gap-4">
  <Link to="/compare">
    <motion.button
      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
      whileHover={{ scale: 1.05 }}
    >
      Compare
    </motion.button>
  </Link>
  <Link to="/login">
    <motion.button
      className="px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-black transition"
      whileHover={{ scale: 1.05 }}
    >
      Login
    </motion.button>
  </Link>
</div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shop Smart. Save More.
        </motion.h2>
        <p className="text-gray-400 mt-6 max-w-xl">
          Discover the best deals across stores in real time. Powered by AI.
        </p>

        <div className="flex gap-4 mt-10 w-full max-w-md">
          <Input placeholder="What do you want to buy?" />
          <Button>Search</Button>
        </div>
      </section>

      {/* Features + Testimonials */}
      <Features />
      <Testimonials />
    </div>
  );
}
