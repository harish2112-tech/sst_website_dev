"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import separatorLine from "@/assets/career/Separetor line.png";

export default function JoinUsPanel() {
    return (
        <div className="relative z-10 -mt-16 sm:-mt-50 w-full">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-[87%] lg:ml-auto bg-white px-6 sm:px-10 lg:px-[85px] py-10 sm:py-10"
            >
                <h2 className="text-xl sm:text-4xl font-medium text-black">Join us</h2>
                <p className="mt-3 text-sm sm:text-xl font-thin text-[#6c6c6c] text-justify leading-relaxed max-w-5xl">
                    At TCS, we believe that the future of technology is shaped by people. As we move towards
                    becoming the world&apos;s largest AI‑led technology services, we foster a culture built on
                    long‑term trust, collective growth, and purposeful innovation—where individuals are empowered
                    to learn continuously, collaborate globally, and create meaningful impact with integrity.
                </p>
                <div className="relative w-full max-w-3xl h-px mt-8 mx-auto opacity-30">
                    <Image
                        src={separatorLine}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
}
