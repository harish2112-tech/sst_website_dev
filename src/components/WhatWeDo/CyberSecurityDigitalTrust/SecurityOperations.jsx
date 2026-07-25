"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import sectionImage from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/Section5_Image.svg";

const TABS = [
    {
        title: "Security Operations Center (SOC)",
        desc: "A centralized team and platform that continuously monitors, analyzes, and responds to security events across the enterprise, around the clock.",
    },
    {
        title: "Security Information & Event Management (SIEM)",
        desc: "Aggregates and correlates log and event data from across the environment to surface anomalies and enable rapid threat detection.",
    },
    {
        title: "Threat Intelligence",
        desc: "Curated intelligence on emerging threats, attacker tactics, and indicators of compromise that sharpens detection and proactive defense.",
    },
    {
        title: "Endpoint Detection & Response",
        desc: "Continuous monitoring of endpoints to detect, investigate, and automatically contain suspicious activity before it spreads.",
    },
    {
        title: "Security Monitoring",
        desc: "Round-the-clock visibility across networks, applications, and cloud workloads to catch issues before they escalate into incidents.",
    },
    {
        title: "Incident Response",
        desc: "A structured, rehearsed process to contain, eradicate, and recover from security incidents while minimizing business impact.",
    },
    {
        title: "Digital Forensics",
        desc: "Deep investigation into security incidents to determine root cause, scope of impact, and evidence for compliance or legal action.",
    },
    {
        title: "Threat Hunting",
        desc: "Proactive, hypothesis-driven searches for hidden adversaries and threats that evade automated detection controls.",
    },
];

const ROTATE_INTERVAL = 4500;

export default function SecurityOperations() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TABS.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [activeIndex]);

    return (
        <section className="w-full py-10 sm:py-[40px] pl-6 sm:pl-[50px] pr-6 sm:pr-0 flex flex-col items-start gap-10 sm:gap-[71px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[1074px] mx-auto text-center"
            >
                <h2 className="text-black text-2xl font-medium">Security Operations</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Modern cyber threats require continuous monitoring supported by advanced analytics, automation, and threat intelligence.
                    <br className="hidden sm:block" />
                    <br className="hidden sm:block" />
                    Security Operations capabilities provide end-to-end visibility across enterprise environments, enabling rapid detection,
                    investigation, containment, and recovery from security incidents.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-stretch lg:items-end w-full gap-8 lg:gap-0">
                <div className="flex flex-col w-full lg:w-[405px] shrink-0">
                    {TABS.map((tab, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <button
                                key={tab.title}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={`flex items-center text-left h-[50px] px-4 border-l-[3px] transition-colors duration-300 ${isActive ? "border-[#2d8ec5] opacity-100" : "border-[#6c6c6c] opacity-70"
                                    }`}
                            >
                                <span className={`text-base sm:text-lg font-light transition-colors duration-300 ${isActive ? "text-black" : "text-[#6c6c6c]"}`}>
                                    {tab.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div className="relative w-full lg:w-[825px] aspect-[825/587] shrink-0 overflow-hidden">
                    <Image src={sectionImage} alt="" fill className="object-cover" />

                    <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-4 sm:px-8 lg:px-0">
                        <div className="relative w-full sm:w-[571px] lg:w-[571px] lg:mr-[-40px] bg-white p-6 sm:p-10 min-h-[240px] sm:min-h-[300px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="flex flex-col gap-4 sm:gap-5"
                                >
                                    <h3 className="text-black text-xl sm:text-2xl font-medium">{TABS[activeIndex].title}</h3>
                                    <p className="text-[#3d3d4e] text-sm sm:text-lg font-light leading-relaxed">
                                        {TABS[activeIndex].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
