import { motion } from "framer-motion";
import { Zap, Shield, Bell, Server, Map, CreditCard } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & performant",
    desc: "Edge-optimized content delivery, smart caching, and snappy UI interactions.",
  },
  {
    icon: Shield,
    title: "Secure by default",
    desc: "Strong authentication, role-based access, and defense-in-depth principles.",
  },
  {
    icon: Bell,
    title: "Real-time updates",
    desc: "Stay in sync with live order status, assignments, and notifications.",
  },
  {
    icon: Server,
    title: "Microservices ready",
    desc: "Service boundaries for users, restaurants, orders, payments, and delivery.",
  },
  {
    icon: Map,
    title: "Location aware",
    desc: "Precise ETAs and route hints using modern mapping services.",
  },
  {
    icon: CreditCard,
    title: "Trusted payments",
    desc: "PCI-friendly flows with tokenized payments and clear refunds.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Built for scale, reliability, and joy
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600">
            Thoughtful defaults and modern architecture ensure smooth operations as you grow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
