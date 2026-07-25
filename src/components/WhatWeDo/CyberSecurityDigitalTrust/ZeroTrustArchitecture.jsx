"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import zeroTrustBg from "@/assets/WhatWeDo/Cybersecurity & Digital Trust/Section10_Bg.svg";

const SLIDES = [
    {
        title: "Continuous Identity Verification",
        desc: [
            "Traditional perimeter-based security models no longer provide adequate protection in distributed enterprise environments.",
            "Zero Trust Architecture follows the principle of Never Trust, Always Verify, requiring continuous authentication, authorization, and validation of every user, device, application, and workload regardless of location.",
        ],
    },
    {
        title: "Least Privilege Access",
        desc: [
            "Access is granted strictly on a need-to-know, need-to-use basis, minimizing the potential impact of any single compromised credential.",
            "Privileges are continuously reassessed as roles, projects, and risk levels change across the organization.",
        ],
    },
    {
        title: "Micro-Segmentation",
        desc: [
            "Networks are divided into small, isolated zones so that a breach in one segment cannot freely spread to the rest of the environment.",
            "Granular policies control east-west traffic between workloads, applications, and services.",
        ],
    },
    {
        title: "Device Trust & Posture",
        desc: [
            "Every device is continuously evaluated for compliance, patch level, and security posture before being granted access.",
            "Non-compliant or unmanaged devices are automatically restricted or remediated before reaching sensitive resources.",
        ],
    },
    {
        title: "Continuous Monitoring & Analytics",
        desc: [
            "Behavioral analytics and telemetry are analyzed in real time to detect anomalies that signal a potential compromise.",
            "Risk signals dynamically adjust access decisions, tightening controls the moment suspicious activity is observed.",
        ],
    },
    {
        title: "Software-Defined Perimeter",
        desc: [
            "Resources are cloaked from the public network and only become visible to authenticated, authorized identities.",
            "This dramatically reduces the enterprise's attack surface compared to traditional VPN and firewall perimeters.",
        ],
    },
];

const ROTATE_INTERVAL = 5500;

export default function ZeroTrustArchitecture() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % SLIDES.length);
        }, ROTATE_INTERVAL);
        return () => clearInterval(timer);
    }, [index]);

    const goTo = (next) => setIndex((next + SLIDES.length) % SLIDES.length);

    return (
        <section className="relative w-full aspect-[1280/633] overflow-hidden">
            <Image src={zeroTrustBg} alt="" fill className="object-cover" />

            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-0">
                <div className="w-full lg:w-[52.3%] lg:ml-[36.6%] flex flex-col gap-3 sm:gap-[14px]">
                    <h2 className="text-white text-xl sm:text-2xl lg:text-[32px] font-normal">Zero Trust Architecture</h2>

                    <div className="bg-[#252f35] w-full px-6 sm:px-8 lg:px-[53px] py-8 sm:py-10 min-h-[260px] sm:min-h-[300px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="flex flex-col gap-4 sm:gap-[34px] text-white w-full"
                            >
                                <p className="text-xl sm:text-2xl lg:text-[32px] font-normal">{SLIDES[index].title}</p>
                                <div className="text-sm sm:text-lg font-thin space-y-3">
                                    {SLIDES[index].desc.map((p) => (
                                        <p key={p}>{p}</p>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center">
                        <div className="bg-[#141c22] rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2">
                            <button
                                type="button"
                                aria-label="Previous"
                                onClick={() => goTo(index - 1)}
                                className="flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border border-white text-white shrink-0"
                            >
                                ←
                            </button>
                            <div className="flex items-center gap-[10px]">
                                {SLIDES.map((_, dotIndex) => (
                                    <button
                                        key={dotIndex}
                                        type="button"
                                        aria-label={`Go to slide ${dotIndex + 1}`}
                                        onClick={() => goTo(dotIndex)}
                                        className={`size-[8px] rounded-full border-[0.5px] transition-colors ${dotIndex === index ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-white"
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                type="button"
                                aria-label="Next"
                                onClick={() => goTo(index + 1)}
                                className="flex items-center justify-center size-[26px] sm:size-[31px] rounded-full border border-white text-white shrink-0"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
