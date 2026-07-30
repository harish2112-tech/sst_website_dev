"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import iacPhoto from "@/assets/WhatWeDo/Cloud and Infrastructure/Section10_Bg.svg";

const ITEMS = [
    {
        title: "Infrastructure as Code (IaC)",
        desc: "Provision and manage infrastructure through version-controlled code, not manual clicks.",
    },
    {
        title: "Automated Provisioning",
        desc: "Spin up compute, storage, and networking resources on demand, without manual tickets.",
    },
    {
        title: "Configuration Management",
        desc: "Keep every environment consistent and drift-free with automated configuration enforcement.",
    },
    {
        title: "Environment Standardization",
        desc: "Ship identical dev, staging, and production environments to eliminate deployment surprises.",
    },
    {
        title: "Cloud Automation",
        desc: "Automate routine operational tasks so your team can focus on higher-value engineering work.",
    },
    {
        title: "Infrastructure Monitoring Automation",
        desc: "Continuously track infrastructure health and trigger automated remediation before issues escalate.",
    },
];

export default function DigitalTwins() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % ITEMS.length);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[30px] flex flex-col items-center gap-8 sm:gap-[45px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-2 max-w-[767px] text-center"
            >
                <h2 className="text-black text-2xl font-medium">Digital Twins</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Simulate infrastructure changes safely before they touch production, with live digital replicas
                    of your systems.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 w-full max-w-[1220px]">
                <div className="flex flex-col justify-between w-full lg:w-[469px] shrink-0">
                    {ITEMS.map((item, index) => {
                        const isActive = index === active;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActive(index)}
                                className={`text-left flex flex-col justify-center px-3 transition-all ${
                                    isActive ? "border-l-[3px] border-[#2d8ec5] py-4 gap-1" : "border-l-0 py-2"
                                }`}
                            >
                                <span className={`text-black ${isActive ? "text-xl sm:text-2xl font-medium" : "text-[#515151] text-lg font-light"}`}>
                                    {item.title}
                                </span>
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-black text-base font-light"
                                    >
                                        {item.desc}
                                    </motion.span>
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="relative w-full lg:flex-1 h-[280px] sm:h-[420px] lg:h-auto overflow-hidden">
                    <AnimatedImage active={active} src={iacPhoto} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                    <div className="absolute inset-x-6 sm:inset-x-10 bottom-6 sm:bottom-10 flex items-end justify-between gap-6">
                        <p className="text-white text-lg sm:text-2xl font-normal max-w-[344px]">
                            Helping organizations realize value faster through proven methodologies.
                        </p>
                        <p className="text-white text-2xl sm:text-[32px] font-semibold shrink-0">
                            {String(active + 1).padStart(2, "0")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AnimatedImage({ active, src }) {
    return (
        <motion.div key={active} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="absolute inset-0">
            <Image src={src} alt="" fill className="object-cover" />
        </motion.div>
    );
}
