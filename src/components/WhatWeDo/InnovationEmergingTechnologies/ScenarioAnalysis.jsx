"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import blockchainPhoto from "@/assets/WhatWeDo/Innovation & Emerging Technologies/Section5_Bg.svg";

const ITEMS = [
    { title: "Blockchain Strategy", desc: "Define where blockchain genuinely adds value across your business, from settlement to provenance tracking." },
    { title: "Smart Contract Development", desc: "Build and audit smart contracts that automate agreements without sacrificing security or compliance." },
    { title: "Supply Chain Traceability", desc: "Track goods and materials end-to-end on an immutable ledger that every partner can trust." },
    { title: "Digital Asset Management", desc: "Issue, custody, and manage tokenized assets with enterprise-grade controls." },
    { title: "Identity Verification", desc: "Give users and partners a portable, verifiable digital identity that reduces fraud and friction." },
];

export default function ScenarioAnalysis() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="w-full py-10 sm:py-16 flex flex-col items-center gap-8 sm:gap-[62px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center px-6"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Scenario Analysis</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Implement blockchain solutions that improve transparency, security, traceability, and trust
                    across business transactions and digital processes.
                </p>
            </motion.div>

            <div className="w-full">
                <div className="relative w-full h-[220px] sm:h-[338px] overflow-hidden">
                    <Image src={blockchainPhoto} alt="" fill className="object-cover" />
                </div>

                <div className="flex flex-col sm:flex-row w-full">
                    {ITEMS.map((item, index) => {
                        const isHovered = hovered === index;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                                onFocus={() => setHovered(index)}
                                onBlur={() => setHovered(null)}
                                className={`text-left flex-1 flex flex-col justify-start gap-3 px-4 sm:px-5 py-6 sm:py-8 transition-colors ${
                                    isHovered ? "bg-[#2d8ec5]/75" : "bg-white"
                                }`}
                            >
                                <p className={`text-lg sm:text-xl font-medium ${isHovered ? "text-white" : "text-black"}`}>
                                    {item.title}
                                </p>
                                {isHovered && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="text-white text-sm font-light leading-snug"
                                    >
                                        {item.desc}
                                    </motion.p>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
