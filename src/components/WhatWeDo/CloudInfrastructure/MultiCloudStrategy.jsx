"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import selectProductIcon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/select-product_svgrepo.com.svg";
import vector1Icon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Vector-1.svg";
import vector2Icon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Vector-2.svg";
import vector3Icon from "@/assets/WhatWeDo/Cloud and Infrastructure/icons/Vector-3.svg";

const ITEMS = [
    {
        title: "Multi-Cloud Architecture",
        desc: "Distribute workloads across multiple cloud providers to avoid lock-in and match every workload to its best-fit platform.",
        icon: selectProductIcon,
    },
    {
        title: "Cloud Governance",
        desc: "Apply consistent policies, access controls, and standards across every cloud provider in your environment.",
        icon: vector1Icon,
    },
    {
        title: "Cost & Vendor Management",
        desc: "Track and optimize spend across providers while keeping negotiating leverage with every vendor.",
        icon: vector2Icon,
    },
    {
        title: "Disaster Resilience",
        desc: "Spread critical workloads across providers so a single vendor outage never becomes your outage.",
        icon: vector3Icon,
    },
];

export default function MultiCloudStrategy() {
    const trackRef = useRef(null);
    const [active, setActive] = useState(0);

    const handleScroll = () => {
        const el = trackRef.current;
        if (!el) return;
        const index = Math.round(el.scrollLeft / (el.scrollWidth / ITEMS.length));
        setActive(Math.max(0, Math.min(ITEMS.length - 1, index)));
    };

    const goTo = (index) => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollTo({ left: (el.scrollWidth / ITEMS.length) * index, behavior: "smooth" });
        setActive(index);
    };

    return (
        <section className="w-full bg-white py-10 sm:py-16 px-6 sm:px-[50px] flex flex-col items-center gap-10 sm:gap-[62px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 max-w-[880px] text-center"
            >
                <h2 className="text-[#0d0c22] text-2xl font-medium">Multi-Cloud Strategy</h2>
                <p className="text-[#3d3d4e] text-base sm:text-lg font-light">
                    Avoid vendor lock-in and maximize flexibility by distributing workloads across the providers
                    that serve them best.
                </p>
            </motion.div>

            <div
                ref={trackRef}
                onScroll={handleScroll}
                className="w-full max-w-[1280px] flex overflow-x-auto sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 lg:grid-cols-4"
            >
                {ITEMS.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                        className="shrink-0 w-[260px] sm:w-auto flex flex-col gap-6 px-4 sm:px-6 py-4 border-b border-[#d9d9d9]"
                    >
                        <div className="flex items-start gap-5">
                            <div className="relative shrink-0 size-[50px] sm:size-[60px]">
                                <Image src={item.icon} alt="" fill className="object-contain" />
                            </div>
                            <div className="w-px self-stretch bg-[#d9d9d9]" />
                            <div className="flex flex-col gap-3">
                                <p className="text-black text-xl sm:text-2xl font-normal">{item.title}</p>
                                <p className="text-[#7f7f7f] text-base sm:text-lg font-light">{item.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex items-center gap-[10px]">
                {ITEMS.map((item, index) => (
                    <button
                        key={item.title}
                        type="button"
                        aria-label={`Go to ${item.title}`}
                        onClick={() => goTo(index)}
                        className={`size-[8px] rounded-full border-[0.5px] transition-colors ${
                            index === active ? "bg-[#2d8ec5] border-[#2d8ec5]" : "border-black"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
