import React from "react";
import StatCard from "./StatItem";

const stats = [
  { value: "1,247", label: "Active Interns" },
  { value: "₹8,47,392", label: "Total Raised" }
];

export default function Stats() {
  return (
    <section className="w-full bg-gradient-to-r from-[#f6fafe] to-[#eef0fb] py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
