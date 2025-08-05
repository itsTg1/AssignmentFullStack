import React from "react";

export default function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-sm px-6 py-4 transition hover:shadow-md">
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <span className="mt-1 text-sm text-gray-500">{label}</span>
    </div>
  );
}
