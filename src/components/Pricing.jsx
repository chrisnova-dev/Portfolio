import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    tag: "FOR STARTERS",
    name: "Starter",
    price: "$50",
    period: "/ Weekly",
    popular: false,
    features: [
      "Telegram/Discord Moderation",
      "Daily community engagement",
      "Welcome new members",
      "Basic raid coordination",
      "Weekly activity report",
    ],
  },
  {
    tag: "MOST POPULAR",
    name: "Growth",
    price: "$120",
    period: "/ Weekly",
    popular: true,
    features: [
      "Everything in Starter",
      "Full raid coordination & proofs",
      "Content shilling on X/Telegram",
      "1 Landing Page (HTML/CSS)",
      "Community growth strategy",
      "Priority response time",
    ],
  },
  {
    tag: "FULL SERVICE",
    name: "Pro",
    price: "$250",
    period: "/ Weekly",
    popular: false,
    features: [
      "Everything in Growth",
      "Full React website",
      "Wallet integration (Web3.js)",
      "Ambassador + KOL outreach",
      "Social media management",
      "24/7 community coverage",
    ],
  },
  {
    tag: "FOR ENTERPRISE",
    name: "Enterprise",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Everything in Pro",
      "Dedicated strategy sessions",
      "Full team management",
      "Monthly performance report",
      "Unlimited revisions",
      "Priority support",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const colVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Pricing() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-28 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-[#FACC15]">Pricing</span>{" "}
            <span className="text-white">Plans</span>
          </h2>
          <p className="text-gray-600 text-sm mt-4">
            Transparent pricing. No hidden fees.
          </p>
        </motion.div>

        {/* 4 columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={colVariants}
              className="px-8 py-10 flex flex-col gap-5"
            >
              <p
                className="text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{ color: plan.popular ? "#FACC15" : "#444" }}
              >
                {plan.tag}
              </p>

              <h3
                className="text-3xl font-black text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {plan.name}
              </h3>

              <div className="flex items-end gap-1.5">
                <span
                  className="text-5xl font-black leading-none"
                  style={{
                    color: plan.popular ? "#FACC15" : "white",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600 text-sm mb-1">
                    {plan.period}
                  </span>
                )}
              </div>

              <div className="h-px bg-white/5" />

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-500"
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 text-xs"
                      style={{ color: plan.popular ? "#FACC15" : "#444" }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 pt-12 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gray-600 text-center mb-10">
            One-Time Services
          </p>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { name: "Landing Page (HTML/CSS/JS)", price: "$80 – $150" },
              { name: "React Website (Multi-page)", price: "$200 – $400" },
              { name: "Web3 Frontend (Wallet + DeFi)", price: "$300 – $600" },
              { name: "Community Setup (Telegram/Discord)", price: "$40" },
              { name: "Raid Campaign (1 week)", price: "$60" },
              { name: "Ambassador Application Writing", price: "$25" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-4 rounded-xl group hover:bg-white/[0.03] transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.04)" }}
              >
                {/* Left — number + name */}
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-black tabular-nums"
                    style={{
                      color: "rgba(250,204,21,0.25)",
                      fontFamily: "'Syne', sans-serif",
                      minWidth: "20px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    {s.name}
                  </p>
                </div>

                {/* Right — price */}
                <p
                  className="text-sm font-black ml-6 whitespace-nowrap"
                  style={{ color: "#FACC15", fontFamily: "'Syne', sans-serif" }}
                >
                  {s.price}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 text-xs mt-8">
            Need something custom? Message me and we'll work it out.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
