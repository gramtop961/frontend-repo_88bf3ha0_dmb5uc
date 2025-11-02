import { motion } from "framer-motion";
import { Utensils, Store, Bike, Map, Clock } from "lucide-react";

const Card = ({ icon: Icon, title, description, bullets, anchorId }) => (
  <motion.a
    href={`#${anchorId}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4 }}
    className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:shadow-md hover:ring-amber-200"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-gray-600">{description}</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      {bullets.map((b) => (
        <li key={b} className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-700">
      Learn more
      <span className="transition-transform group-hover:translate-x-0.5">→</span>
    </div>
  </motion.a>
);

export default function Interfaces() {
  return (
    <section id="interfaces" className="relative border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Three experiences, one platform
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600">
            Designed for customers, restaurants, and delivery partners with real-time updates
            and effortless flows.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={Utensils}
            title="Customer App"
            description="Discover restaurants, browse menus, customize orders, and track in real time."
            bullets={["Smart search & filters", "Live order tracking", "Saved addresses & favorites"]}
            anchorId="customers"
          />
          <Card
            icon={Store}
            title="Restaurant Portal"
            description="Manage menus, pricing, availability, and process orders with ease."
            bullets={["Menu & modifier controls", "Order queue & prep times", "Insights & reviews"]}
            anchorId="partners"
          />
          <Card
            icon={Bike}
            title="Delivery Partner"
            description="Get assigned orders, optimize routes, and deliver on time—every time."
            bullets={["Smart assignment", "Navigation & route hints", "Earnings dashboard"]}
            anchorId="delivery"
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="flex items-center gap-3">
              <Map className="h-5 w-5 text-amber-700" />
              <h3 className="font-semibold text-gray-900">Real-time order tracking</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Built for low-latency updates so customers always know where their food is.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-amber-50 to-white p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-amber-700" />
              <h3 className="font-semibold text-gray-900">Frictionless checkouts</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Seamless payment flows tuned for high conversion and repeat orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
