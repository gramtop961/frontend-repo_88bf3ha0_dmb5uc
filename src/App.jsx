import Hero from "./components/Hero";
import Interfaces from "./components/Interfaces";
import Features from "./components/Features";
import Architecture from "./components/Architecture";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Interfaces />
      <Features />
      <Architecture />

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-gray-600">
          <span className="font-semibold text-amber-700">Project Nectar</span> • Food Delivery Aggregator • Built for customers, restaurants, and riders
        </div>
      </footer>
    </div>
  );
}

export default App;
