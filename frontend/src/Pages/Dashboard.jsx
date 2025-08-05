import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const url = "https://assignmentapi-qdpl.onrender.com/api/users/get"

        const response = await axios.get(url)
        console.log("Fetched data:", response.data);
        const sortedUsers = response.data.sort((a, b) => b.amountRaised - a.amountRaised);
        const currentUser = sortedUsers[0];
        setData({
          ...currentUser,
          rank: sortedUsers.findIndex(user => user._id === currentUser._id) + 1
        });

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  });

  useEffect(()=>{
    console.log("Data fetched:", data);
  },[data])


  if (loading) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  if (!data) {
    return <div className="h-screen flex justify-center items-center text-red-500">Failed to load data</div>;
  }

  const { amountRaised,referralCode,username,rewards,rank} = data;

  return (
    <div className="min-h-screen mt-[100px]">
      <Navbar />
    
      <div className="max-w-5xl mx-auto mt-6 px-4">
        <button
          onClick={() => navigate('/')}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition mb-6"
        >
          ← Go Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto py-10 px-4">
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-3xl font-cursive font-bold mb-2 text-pink-700">Welcome, {username} 👋</h2>
          <p className="text-gray-500 mb-4">Track your fundraising progress and rewards.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-pink-100 rounded-xl text-center">
              <div className="text-sm text-gray-500 mb-1">Referral Code</div>
              <div className="text-xl font-semibold text-pink-700">{referralCode}</div>
            </div>
            <div className="p-5 bg-green-100 rounded-xl text-center">
              <div className="text-sm text-gray-500 mb-1">Total Donations</div>
              <div className="text-xl font-semibold text-green-700">₹{amountRaised}</div>
            </div>
            <div className="p-5 bg-yellow-100 rounded-xl text-center">
              <div className="text-sm text-gray-500 mb-1">Your Rank</div>
              <div className="text-xl font-semibold text-yellow-700">#{rank}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-2xl font-cursive font-bold mb-4 text-pink-700">Rewards & Unlockables</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border text-center transition ${
                  reward.unlocked ? "bg-white border-pink-300" : "bg-gray-100 border-gray-200 opacity-60"
                }`}
              >
                <div className="text-4xl mb-3">
                  {reward.unlocked ? "🏅" : "🔒"}
                </div>
                <div className="font-semibold text-lg">{reward.title}</div>
                <div className="text-gray-500 text-sm">{reward.description}</div>
                {reward.unlocked && (
                  <div className="mt-2 text-green-500 font-medium">Unlocked</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
