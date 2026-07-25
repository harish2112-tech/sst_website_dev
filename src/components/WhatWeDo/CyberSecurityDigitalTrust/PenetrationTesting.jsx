"use client";

import { motion } from "framer-motion";

const STATS = [
    { value: "24×7", label: "Security Monitoring" },
    { value: "24×7", label: "Threat Detection" },
    { value: "24×7", label: "Incident Response" },
    { value: "24×7", label: "SOC Availability" },
];

export default function PenetrationTesting() {
    return (
        <section className="w-full">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-start px-6 sm:px-[50px] py-10 lg:py-[40px] max-w-[1152px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-black text-2xl font-medium w-full lg:w-[193px] shrink-0"
                >
                    Penetration Testing
                </motion.h2>
                <div className="hidden lg:block w-px self-stretch bg-[#2d8ec5] mx-10" />
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="text-[#3d3d4e] text-base sm:text-lg font-light max-w-[467px]"
                >
                    <p>Validating Security Through Controlled Attack Simulation</p>
                    <p>
                        Penetration Testing simulates real-world attack scenarios to evaluate how effectively security controls
                        withstand sophisticated cyber threats.
                    </p>
                    <p>
                        Testing follows recognized industry methodologies to identify exploitable vulnerabilities across
                        applications, infrastructure, cloud environments, wireless networks, and APIs.
                    </p>
                </motion.div>
            </div>

            <div className="bg-[#151517] w-full py-10 sm:py-[71px] px-6 sm:px-[86px] flex flex-col items-center gap-10 sm:gap-[63px]">
                <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-[#2d8ec5] text-2xl font-medium text-center"
                >
                    Enterprise &amp; Technical
                </motion.h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[47px] w-full max-w-[1076px]">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                            className="bg-[#1e1e20] aspect-[233/161] flex flex-col items-center justify-center gap-2"
                        >
                            <p className="text-[#2d8ec5] text-xl sm:text-2xl font-medium">{stat.value}</p>
                            <p className="text-white text-sm sm:text-lg font-light text-center px-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
