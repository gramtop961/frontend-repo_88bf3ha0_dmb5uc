import { motion } from "framer-motion";
import { Rocket, Utensils, Store, Bike } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100 via-white to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
            <Rocket className="h-3.5 w-3.5" />
            Project Nectar • Food Delivery Aggregator
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            One platform. Every meal. Real-time delivery.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg">
            Discover restaurants, manage menus, and track deliveries across the city. A modern
            end-to-end experience for customers, restaurant partners, and delivery riders.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#interfaces"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-white shadow-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Utensils className="h-5 w-5" />
              Explore Restaurants
            </a>
            <a
              href="#partners"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-amber-700 ring-1 ring-amber-200 shadow-sm hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Store className="h-5 w-5" />
              Partner with Us
            </a>
            <a
              href="#delivery"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-amber-700 ring-1 ring-amber-200 shadow-sm hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Bike className="h-5 w-5" />
              Delivery Partners
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
