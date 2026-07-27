"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import sectionImage from "@/assets/WhatWeDo/Experience Design/Section2_Image.jpg";

const CAPABILITIES = [
    "User Interface Design",
    "User Experience Design",
    "Responsive Design",
    "Mobile & Web UI",
    "Dashboard Design",
    "Design Optimization",
];

export default function UIUXDesign() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[767px] mx-auto text-center mb-10 sm:mb-[49px]"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">UIUX Design</h2>
                <div className="text-black text-base sm:text-lg font-light">
                    <p>Transform Ideas into Digital Products</p>
                    <p>From concept to launch, we design scalable digital products that align user expectations with business goals.</p>
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8 max-w-[1180px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-9 w-full lg:w-[405px] shrink-0"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-black text-2xl font-normal">Design Interfaces That Feel Natural</h3>
                        <p className="text-black text-lg font-light">
                            We create intuitive, visually engaging, and user-friendly interfaces that provide seamless
                            experiences across web, mobile, and enterprise platforms.
                        </p>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        {CAPABILITIES.map((item, index) => (
                            <div
                                key={item}
                                className={`flex items-center h-[50px] px-4 border-l-[3px] ${
                                    index === 0 ? "border-[#2d8ec5]" : "border-[#7f7f7f]"
                                }`}
                            >
                                <span className="text-black text-xl sm:text-2xl font-normal">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full lg:w-[687px] aspect-[687/764] shrink-0 overflow-hidden bg-[#e8e8e8]"
                >
                    <Image src={sectionImage} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                    <p className="absolute left-6 sm:left-9 right-6 sm:right-9 bottom-8 sm:bottom-12 text-[#e4e4e4] text-lg sm:text-2xl font-light leading-relaxed">
                        Users expect digital products to be simple, intuitive, and accessible. A well-designed
                        experience not only improves usability but also strengthens customer trust, increases
                        adoption, and supports long-term business growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
