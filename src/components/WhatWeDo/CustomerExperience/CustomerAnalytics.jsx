"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import photoStrip from "@/assets/WhatWeDo/Customer Experience/Section9_Middle_Image.svg";
import predictiveCardImg from "@/assets/WhatWeDo/Customer Experience/Section12_Card_Image.svg";

const ROW_ONE = [
    {
        title: "Customer Persona Development",
        desc: "Segment customers into meaningful personas based on behavior, preferences, and value to the business.",
    },
    {
        title: "Behavioral Analytics",
        desc: "Track how customers interact with your products and services to uncover patterns that drive better decisions.",
    },
];

const PREDICTIVE_CARD = {
    title: "Predictive Customer Insights",
    desc: "Apply predictive models to anticipate customer needs and personalize engagement before they ask.",
};

const ROW_TWO = [
    {
        title: "Customer Lifetime Value Analysis",
        desc: "Quantify the long-term value of each customer relationship to prioritize retention and growth investments.",
    },
    {
        title: "Churn Prediction",
        desc: "Identify at-risk customers early with predictive signals so your team can act before they leave.",
    },
    {
        title: "Customer Satisfaction Analysis",
        desc: "Measure satisfaction across every touchpoint to understand what's driving loyalty and what isn't.",
    },
];

function PlainCard({ title, desc, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col gap-8 bg-[#dfdfdf] px-8 py-10 sm:py-12 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <p className="text-black text-2xl font-medium">{title}</p>
            <p className="text-[#3d3d4e] text-base sm:text-lg font-light">{desc}</p>
        </motion.div>
    );
}

export default function CustomerAnalytics() {
    return (
        <section className="w-full py-14 sm:py-20 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center px-6 mb-12 sm:mb-16"
            >
                <h2 className="text-black text-2xl font-medium">Customer Analytics</h2>
                <p className="text-black text-base sm:text-lg font-light">
                    Analyze customer behavior, preferences, and interactions to make informed business
                    decisions and improve customer engagement.
                </p>
            </motion.div>

            <div className="relative w-full h-[160px] sm:h-[197px] mb-0">
                <Image src={photoStrip} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-3">
                {ROW_ONE.map((card, index) => (
                    <PlainCard key={card.title} {...card} index={index} />
                ))}

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.16 }}
                    className="group relative flex flex-col gap-8 px-8 py-10 sm:py-12 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                    <Image
                        src={predictiveCardImg}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
                    <p className="relative text-white text-2xl font-medium">{PREDICTIVE_CARD.title}</p>
                    <p className="relative text-white/90 text-base sm:text-lg font-light">{PREDICTIVE_CARD.desc}</p>
                </motion.div>

                {ROW_TWO.map((card, index) => (
                    <PlainCard key={card.title} {...card} index={index + 3} />
                ))}
            </div>
        </section>
    );
}
