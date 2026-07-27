"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import java from "@/assets/WhatWeDo/Experience Design/icons/java.png";
import mongodb from "@/assets/WhatWeDo/Experience Design/icons/mongodb.png";
import nodejs from "@/assets/WhatWeDo/Experience Design/icons/nodejs.png";
import postgresql from "@/assets/WhatWeDo/Experience Design/icons/postgresql.png";
import python from "@/assets/WhatWeDo/Experience Design/icons/python.png";
import react from "@/assets/WhatWeDo/Experience Design/icons/react.png";

const LOGOS = [
    { name: "Java", src: java, width: 87 },
    { name: "mongoDB", src: mongodb, width: 150 },
    { name: "Node.js", src: nodejs, width: 100 },
    { name: "PostgreSQL", src: postgresql, width: 182 },
    { name: "Python", src: python, width: 114 },
    { name: "React", src: react, width: 117 },
];

export default function DesignToolsTechnologies() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[50px]">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[#0d0c22] text-2xl font-medium text-center mb-10 sm:mb-12"
            >
                Design Tools &amp; Technologies
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="flex flex-wrap items-center justify-center gap-8 sm:gap-[48px] max-w-[1180px] mx-auto"
            >
                {LOGOS.map((logo) => (
                    <div
                        key={logo.name}
                        className="relative h-[42px] sm:h-[60px] grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                        style={{ width: logo.width * 0.75 }}
                    >
                        <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
