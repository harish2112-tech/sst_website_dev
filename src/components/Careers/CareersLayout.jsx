"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactBand from "./ContactBand";
import defaultHeroBg from "@/assets/career/Careers hero BG.jpg";

export default function CareersLayout({
    children,
    breadcrumbs,
    heroContent,
    afterContent,
    showContactBand = false,
    cardBg = "bg-slate-50",
    heroBg = defaultHeroBg,
    heroAspectRatio = false,
}) {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <div
                className={`relative w-full h-[340px] overflow-hidden ${heroAspectRatio ? "sm:h-auto sm:aspect-[1280/669]" : "sm:h-[669px]"
                    }`}
            >
                <Image
                    src={heroBg}
                    alt=""
                    fill
                    priority
                    className="object-cover object-center"
                />
                <Navbar />
                {heroContent && (
                    <div className="absolute inset-x-0 bottom-0 z-10 px-6 sm:px-10 md:ml-7 lg:px-[165px] pb-24 sm:pb-65">
                        {heroContent}
                    </div>
                )
                }
            </div>

            {children && (
                <main className="relative z-10 flex-grow w-full -mt-16 sm:-mt-87 pb-16">
                    <div className={`w-full lg:w-[85%] lg:ml-auto ${cardBg}`}>
                        {breadcrumbs && (
                            <div className="flex items-center gap-2 px-6 sm:px-10 py-4 text-sm">
                                {breadcrumbs}
                            </div>
                        )}
                        <div className="px-4 sm:px-8 py-10">
                            {children}
                        </div>
                    </div>
                </main>
            )}

            {afterContent}
            {showContactBand && <ContactBand />}
            <Footer />
        </div>
    );
}
