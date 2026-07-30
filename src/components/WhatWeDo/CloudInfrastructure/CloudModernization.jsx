"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import appModernizationPhoto from "@/assets/WhatWeDo/Cloud and Infrastructure/Section4_image1.svg";
import containerizationPhoto from "@/assets/WhatWeDo/Cloud and Infrastructure/Section4_image2.svg";

const PANELS = [
    {
        title: "Application Modernization",
        subtitle: "Refactor for Cloud-Native Performance",
        desc: "Re-architect monolithic applications into modular, cloud-native services built for scale and speed.",
        image: appModernizationPhoto,
        services: [
            "Application Refactoring",
            "Microservices Migration",
            "API Modernization",
            "Cloud-Native Redesign",
            "Legacy Decommissioning",
            "Performance Tuning",
        ],
    },
    {
        title: "Containerization",
        subtitle: "Package Once, Deploy Anywhere",
        desc: "Containerize workloads with Docker and Kubernetes for consistent deployment across any environment.",
        image: containerizationPhoto,
        services: [
            "Docker Implementation",
            "Kubernetes Orchestration",
            "Container Security",
            "CI/CD Pipelines",
            "Service Mesh",
            "Auto-Scaling",
        ],
    },
];

export default function CloudModernization() {
    return (
        <section className="w-full py-10 sm:py-16 px-6 sm:px-[40px] flex justify-center">
            <div className="w-full max-w-[1155px] flex flex-col lg:flex-row gap-10 lg:gap-[76px]">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-10 sm:gap-12 w-full lg:w-[417px] shrink-0"
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[#0d0c22] text-2xl font-medium">Cloud Modernization</h2>
                        <p className="text-black text-lg font-normal">Modernize Legacy Systems for the Cloud Era</p>
                        <p className="text-[#3d3d4e] text-lg font-light">
                            Transform legacy applications into cloud-native solutions that improve performance,
                            flexibility, and operational efficiency.
                        </p>
                    </div>

                    {PANELS.map((panel) => (
                        <div key={panel.title} className="border-l-[3px] border-[#2d8ec5] pl-9 flex flex-col gap-4">
                            <p className="text-[#0d0c22] text-2xl font-medium">{panel.title}</p>
                            <div className="text-[#3d3d4e] text-lg font-light flex flex-col gap-3">
                                <p>{panel.subtitle}</p>
                                <p>{panel.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <div className="flex flex-col gap-6 w-full">
                    {PANELS.map((panel, index) => (
                        <motion.div
                            key={panel.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            className="relative w-full h-[240px] sm:h-[300px] lg:h-[348px] overflow-hidden"
                        >
                            <Image src={panel.image} alt="" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/30 to-transparent" />
                            <div className="absolute inset-0 flex flex-col justify-center gap-3 px-6 sm:px-[60px]">
                                <p className="text-white text-xl sm:text-[32px] font-normal">Services</p>
                                <ul className="text-white text-sm sm:text-lg font-light space-y-0.5">
                                    {panel.services.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
