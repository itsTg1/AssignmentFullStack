import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <section className="text-black py-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left font-cursive">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
            Welcome to <span className="text-pink-400">She Can Foundation</span>
          </h1>
          <p className="text-lg md:text-2xl text-black mb-8 leading-relaxed">
            Founded by passionate individuals, our mission is to build a world where every woman
            has the opportunity to grow, lead, and inspire change across communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              className="bg-pink-500 hover:bg-pink-600 transition text-white font-bold rounded-md px-7 py-3 text-lg shadow-lg"
              onClick={() => navigate("/leaderboard")}
            >
              Our Impact &rarr;
            </button>
            
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="https://images.unsplash.com/photo-1708513524652-0e1694d7ebdd?q=80&w=1200&auto=format&fit=crop"
            alt="Empowered women"
            className="w-full h-full max-h-[600px] object-cover rounded-2xl shadow-2xl transition duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
