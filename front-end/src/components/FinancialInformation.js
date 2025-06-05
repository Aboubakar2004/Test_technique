"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function FinancialInformation() {
  const [activeTab, setActiveTab] = useState("Euribor1w");

  const data = [
    { name: "1", value1: 10, value2: 8, value3: 5 },
    { name: "5", value1: 15, value2: 12, value3: 8 },
    { name: "10", value1: 12, value2: 15, value3: 10 },
    { name: "15", value1: 18, value2: 16, value3: 12 },
    { name: "20", value1: 25, value2: 22, value3: 18 },
    { name: "25", value1: 40, value2: 30, value3: 25 },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white p-2 rounded-lg text-sm">
          <p>202345</p>
        </div>
      );
    }
    return null;
  };

  const tableDataSets = {
    Euribor1w: [
      {
        tenor: "7 DAYS",
        marketPlace: "0.0000",
        riskFree: "0",
        riskFreePremium: "0.0000",
        change: "0.0000",
        variation: "1",
      },
      {
        tenor: "30 DAYS",
        marketPlace: "0.0000",
        riskFree: "0",
        riskFreePremium: "0.0000",
        change: "0.0000",
        variation: "9",
      },
      {
        tenor: "90 DAYS",
        marketPlace: "0.0000",
        riskFree: "0.02345",
        riskFreePremium: "0.0300",
        change: "0.0000",
        variation: "0.02345",
      },
      {
        tenor: "180 DAYS",
        marketPlace: "0.03500",
        riskFree: "0.03500",
        riskFreePremium: "0.03500",
        change: "0.03500",
        variation: "0.03500",
      },
      {
        tenor: "360 DAYS",
        marketPlace: "0.004400",
        riskFree: "0.004400",
        riskFreePremium: "0.004400",
        change: "0.004400",
        variation: "0.004400",
      },
    ],
    Euribor2w: [
      {
        tenor: "7 DAYS",
        marketPlace: "0.1200",
        riskFree: "0.1000",
        riskFreePremium: "0.0200",
        change: "0.0150",
        variation: "2",
      },
      {
        tenor: "30 DAYS",
        marketPlace: "0.1500",
        riskFree: "0.1300",
        riskFreePremium: "0.0200",
        change: "0.0180",
        variation: "3",
      },
      {
        tenor: "90 DAYS",
        marketPlace: "0.1800",
        riskFree: "0.1600",
        riskFreePremium: "0.0200",
        change: "0.0220",
        variation: "4",
      },
      {
        tenor: "180 DAYS",
        marketPlace: "0.2100",
        riskFree: "0.1900",
        riskFreePremium: "0.0200",
        change: "0.0250",
        variation: "5",
      },
      {
        tenor: "360 DAYS",
        marketPlace: "0.2400",
        riskFree: "0.2200",
        riskFreePremium: "0.0200",
        change: "0.0280",
        variation: "6",
      },
    ],
    Euribor3w: [
      {
        tenor: "7 DAYS",
        marketPlace: "0.2500",
        riskFree: "0.2300",
        riskFreePremium: "0.0200",
        change: "0.0300",
        variation: "7",
      },
      {
        tenor: "30 DAYS",
        marketPlace: "0.2800",
        riskFree: "0.2600",
        riskFreePremium: "0.0200",
        change: "0.0330",
        variation: "8",
      },
      {
        tenor: "90 DAYS",
        marketPlace: "0.3100",
        riskFree: "0.2900",
        riskFreePremium: "0.0200",
        change: "0.0360",
        variation: "9",
      },
      {
        tenor: "180 DAYS",
        marketPlace: "0.3400",
        riskFree: "0.3200",
        riskFreePremium: "0.0200",
        change: "0.0390",
        variation: "10",
      },
      {
        tenor: "360 DAYS",
        marketPlace: "0.3700",
        riskFree: "0.3500",
        riskFreePremium: "0.0200",
        change: "0.0420",
        variation: "11",
      },
    ],
    "Average Sector Spread": [
      {
        tenor: "7 DAYS",
        marketPlace: "0.4000",
        riskFree: "0.3800",
        riskFreePremium: "0.0200",
        change: "0.0450",
        variation: "12",
      },
      {
        tenor: "30 DAYS",
        marketPlace: "0.4300",
        riskFree: "0.4100",
        riskFreePremium: "0.0200",
        change: "0.0480",
        variation: "13",
      },
      {
        tenor: "90 DAYS",
        marketPlace: "0.4600",
        riskFree: "0.4400",
        riskFreePremium: "0.0200",
        change: "0.0510",
        variation: "14",
      },
      {
        tenor: "180 DAYS",
        marketPlace: "0.4900",
        riskFree: "0.4700",
        riskFreePremium: "0.0200",
        change: "0.0540",
        variation: "15",
      },
      {
        tenor: "360 DAYS",
        marketPlace: "0.5200",
        riskFree: "0.5000",
        riskFreePremium: "0.0200",
        change: "0.0570",
        variation: "16",
      },
    ],
  };

  const tabs = ["Euribor1w", "Euribor2w", "Euribor3w", "Average Sector Spread"];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Informations financières</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white rounded-xl p-6 w-full lg:w-[500px]">
          <div className="h-[250px] mr-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  ticks={[0, 10, 20, 30, 40, 50]}
                  domain={[0, 50]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="value1"
                  stroke="#4ade80"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="value2"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="value3"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 mt-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-500">Lorem ipsum</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span className="text-sm text-gray-500">Lorem ipsum</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-gray-500">Lorem ipsum</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 w-full lg:w-[900px]">
          <div className="flex justify-between mb-6 bg-[#f7f8fb] overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#d0d4f8] text-[#4b4d9b] font-medium"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 font-bold text-[#4b4d9b]">
                    Tenor
                  </th>
                  <th className="text-left py-2 font-bold text-[#4b4d9b]">
                    Market Place
                  </th>
                  <th className="text-left py-2 font-bold text-[#4b4d9b]">
                    Market Risk Free
                  </th>
                  <th className="text-left py-2 font-bold text-[#4b4d9b]">
                    Market Risk Free Premium
                  </th>
                  <th className="text-left py-2 font-bold text-[#4b4d9b]">
                    Change %
                  </th>
                  <th className="text-left py-2 font-bold text-[#4b4d9b]">
                    Variation
                  </th>
                </tr>
              </thead>
              <tbody className="transition-all duration-300 ease-in-out">
                {tableDataSets[activeTab].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 last:border-0 transition-all duration-300 ease-in-out hover:bg-gray-50"
                  >
                    <td className="py-3">{row.tenor}</td>
                    <td className="py-3">{row.marketPlace}</td>
                    <td className="py-3">{row.riskFree}</td>
                    <td className="py-3">{row.riskFreePremium}</td>
                    <td className="py-3">{row.change}</td>
                    <td className="py-3">{row.variation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialInformation;
