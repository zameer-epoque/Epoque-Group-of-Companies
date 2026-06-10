
"use client";

import { useState } from "react";
import {
  Building2,
  Plane,
  HeartPulse,
  GraduationCap,
  Trees,
  Landmark,
} from "lucide-react";

const tabs = [
  {
    title: "Corporate Offices",
    icon: Building2,
    items: [
      ["Electronic City", "7 Min"],
      ["Hardware Park", "7 Min"],
      ["World Trade Centre", "8 Min"],
      ["Skyroot Aerospace", "9 Min"],
      ["RCI", "13 Min"],
      ["DRDO", "20 Min"],
      ["TCS Aerospace SEZ", "21 Min"],
      ["Foxconn", "15 Min"],
      ["Amazon Data Centre", "25 Min"],
    ],
  },

  {
    title: "Entertainment",
    icon: Trees,
    items: [
      ["Decathlon Sports Mall", "10 Min"],
      ["Novotel Hyderabad", "10 Min"],
      ["Jungle Camp", "12 Min"],
      ["Wonderla", "20 Min"],
      ["Urban Forest Park", "16 Min"],
      ["Statue of Equality", "24 Min"],
    ],
  },

  {
    title: "Healthcare",
    icon: HeartPulse,
    items: [
      ["MadhavanJi Hospital", "12 Min"],
      ["JIMS Hospital", "24 Min"],
      ["AIG Hospital", "30 Min"],
      ["Care Hospital", "30 Min"],
      ["Owaisi Hospital", "37 Min"],
    ],
  },

  {
    title: "Schools",
    icon: GraduationCap,
    items: [
      ["Sri Sri Academy", "9 Min"],
      ["Devendra Vidyalaya", "10 Min"],
      ["GMR Chinmaya", "13 Min"],
      ["Aga Khan School", "15 Min"],
      ["Manchester Global", "16 Min"],
      ["DPS Airport", "17 Min"],
    ],
  },

  {
    title: "Government",
    icon: Landmark,
    items: [
      ["Rangareddy Collectorate", "14 Min"],
      ["New High Court", "46 Min"],
    ],
  },

  {
    title: "Connectivity",
    icon: Plane,
    items: [
      ["ORR Exit 14", "3 Min"],
      ["RGIA Airport", "8 Min"],
    ],
  },
];

export default function LocationAdvantages() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#EF3B2D] font-semibold">
            Location Advantages
          </span>

          <h2 className="mt-4 text-5xl md:text-7xl font-black text-[#003D7A]">
            Everything Within Reach
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Strategically located near Airport, ORR,
            Future City, Aerospace Corridor and
            Hyderabad's fastest-growing employment hub.
          </p>
        </div>

        {/* Tabs */}

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {tabs.map((tab, index) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.title}
                onClick={() => setActive(index)}
                className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all ${
                  active === index
                    ? "bg-[#0057A8] text-white"
                    : "bg-white text-slate-600 border"
                }`}
              >
                <Icon size={18} />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Active Content */}

        <div className="mt-12 rounded-[40px] bg-white p-10 shadow-xl">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {tabs[active].items.map(([name, time]) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-100 p-5 hover:border-[#0057A8] transition"
              >
                <h3 className="font-bold text-[#003D7A]">
                  {name}
                </h3>

                <p className="mt-2 text-[#EF3B2D] font-semibold">
                  {time}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

