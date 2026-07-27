"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import bgPhoto from "@/assets/WhatWeDo/Experience Design/Section4_DesignSystems_Bg.jpg";

function ArrowIcon({ className }) {
    return (
        <svg viewBox="0 0 74 74" fill="none" className={className}>
            <path
                d="M37 61.4V12.3M18.4 30.7L37 12.3l18.6 18.4"
                stroke="currentColor"
                strokeWidth="4.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const ITEMS = [
    {
        tag: "Design Systems",
        title: "UI Component Libraries",
        desc: "Build the Next Generation of Digital Solutions. Reusable, well-documented components that let teams ship consistent interfaces faster without reinventing the wheel.",
    },
    {
        tag: "Design Systems",
        title: "Design Tokens & Theming",
        desc: "Centralized color, spacing, and typography tokens that keep every product on-brand and make light/dark theming effortless to maintain.",
    },
    {
        tag: "Design Systems",
        title: "Style Guide Documentation",
        desc: "Living documentation that pairs design intent with usage guidelines, keeping designers and engineers aligned as the system evolves.",
    },
    {
        tag: "Design Systems",
        title: "Accessibility Standards",
        desc: "Accessibility built into every component by default, so inclusive design is the baseline rather than an afterthought.",
    },
    {
        tag: "Design Systems",
        title: "Cross-Platform Consistency",
        desc: "One shared design language across web, mobile, and enterprise platforms for a seamless experience everywhere.",
    },
    {
        tag: "Design Systems",
        title: "Component Governance",
        desc: "Clear contribution and versioning guidelines that keep the design system scalable as more teams adopt it.",
    },
];

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
};

export default function DesignSystems() {
    const [[index, direction], setPage] = useState([0, 1]);
    const maxIndex = ITEMS.length - 2;
    const left = ITEMS[index];
    const right = ITEMS[index + 1];

    const goTo = (next, dir) => setPage([Math.max(0, Math.min(maxIndex, next)), dir]);

    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[42px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Design Systems</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Scalable design systems that keep every product consistent, accessible, and easy to build on.
                </p>
            </motion.div>

            <div className="relative w-full max-w-[1280px] mx-auto">
                <div className="relative w-full aspect-[1314/592] min-h-[420px] overflow-hidden">
                    <Image src={bgPhoto} alt="" fill className="object-cover" />

                    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-0">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[21px] w-full min-w-0 sm:w-auto">
                            <div className="relative bg-[#0a2b3e] w-full min-w-0 sm:w-[439px] h-[340px] sm:h-[377px] overflow-hidden">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={index}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0 flex flex-col justify-between px-6 sm:px-[27px] py-8 sm:py-[48px]"
                                    >
                                        <p className="text-white text-lg font-light">{left.tag}</p>
                                        <p className="text-white text-2xl font-medium">{left.title}</p>
                                        <p className="text-[#c9c9c9] text-sm sm:text-base font-light leading-relaxed">{left.desc}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="hidden sm:block relative bg-[#f1f1f1] w-full sm:w-[439px] h-[377px] overflow-hidden">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={index}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0 flex flex-col justify-between px-[27px] py-[48px]"
                                    >
                                        <p className="text-black text-lg font-light">{right.tag}</p>
                                        <p className="text-black text-2xl font-medium">{right.title}</p>
                                        <p className="text-[#6c6c6c] text-base font-light leading-relaxed">{right.desc}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center sm:justify-end mt-6">
                    <div className="bg-[#f1f1f1] rounded-full flex items-center justify-center gap-[10px] h-[50px] sm:h-[61px] w-[210px] sm:w-[250px] px-2">
                        <button
                            type="button"
                            aria-label="Previous"
                            onClick={() => goTo(index - 1, -1)}
                            disabled={index === 0}
                            className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full shrink-0 transition-transform hover:scale-110 ${
                                index === 0 ? "text-[#a4a7a5]" : "text-black"
                            }`}
                        >
                            <ArrowIcon className="size-full -rotate-90" />
                        </button>
                        <div className="flex items-center gap-[10px]">
                            {ITEMS.map((_, dotIndex) => (
                                <button
                                    key={dotIndex}
                                    type="button"
                                    aria-label={`Go to slide ${dotIndex + 1}`}
                                    onClick={() => goTo(Math.min(dotIndex, maxIndex), dotIndex > index ? 1 : -1)}
                                    className={`size-[8px] rounded-full border-[0.5px] transition-colors ${
                                        dotIndex === index ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-black"
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            aria-label="Next"
                            onClick={() => goTo(index + 1, 1)}
                            disabled={index === maxIndex}
                            className={`flex items-center justify-center size-[26px] sm:size-[31px] rounded-full shrink-0 transition-transform hover:scale-110 ${
                                index === maxIndex ? "text-[#a4a7a5]" : "text-black"
                            }`}
                        >
                            <ArrowIcon className="size-full rotate-90" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
