import { motion } from "framer-motion";
import { Server, Database, Boxes, Cog, Cloud } from "lucide-react";

export default function Architecture() {
  return (
    <section className="relative border-t border-gray-100 bg-gradient-to-b from-white to-amber-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Architecture at a glance
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600">
            A service-oriented backend and responsive frontends come together for a seamless experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <Boxes className="h-6 w-6 text-amber-700" />
              <h3 className="text-lg font-semibold text-gray-900">Core services</h3>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="rounded-lg bg-amber-50 p-2">User Service</li>
              <li className="rounded-lg bg-amber-50 p-2">Restaurant Service</li>
              <li className="rounded-lg bg-amber-50 p-2">Order Service</li>
              <li className="rounded-lg bg-amber-50 p-2">Payment Service</li>
              <li className="rounded-lg bg-amber-50 p-2">Notification Service</li>
              <li className="rounded-lg bg-amber-50 p-2">Delivery Service</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <Server className="h-6 w-6 text-amber-700" />
              <h3 className="text-lg font-semibold text-gray-900">Platform & runtime</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="rounded-lg bg-amber-50 p-2">Node.js + Express APIs</li>
              <li className="rounded-lg bg-amber-50 p-2">JWT authentication</li>
              <li className="rounded-lg bg-amber-50 p-2">Dockerized microservices</li>
              <li className="rounded-lg bg-amber-50 p-2">Kubernetes orchestration</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <Database className="h-6 w-6 text-amber-700" />
              <h3 className="text-lg font-semibold text-gray-900">State & messaging</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="rounded-lg bg-amber-50 p-2">PostgreSQL for relational data</li>
              <li className="rounded-lg bg-amber-50 p-2">Redis for caching</li>
              <li className="rounded-lg bg-amber-50 p-2">RabbitMQ for events</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <Cog className="h-6 w-6 text-amber-700" />
              <h3 className="text-lg font-semibold text-gray-900">API gateway & security</h3>
            </div>
            <p className="text-sm text-gray-700">
              Requests flow through an API gateway, which handles routing, rate limiting, and JWT
              verification before reaching the appropriate service. Services communicate asynchronously
              through RabbitMQ events and leverage Redis for fast lookups, while PostgreSQL maintains
              durable state.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <Cloud className="h-6 w-6 text-amber-700" />
              <h3 className="text-lg font-semibold text-gray-900">Clients & live updates</h3>
            </div>
            <p className="text-sm text-gray-700">
              Responsive web apps for customers, restaurants, and delivery partners connect over HTTPS
              and receive live status updates via WebSocket channels. Mapping services power ETAs and
              navigation helpers for on-time deliveries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
