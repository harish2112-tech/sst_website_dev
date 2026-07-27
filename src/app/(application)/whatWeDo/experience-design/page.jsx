"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FutureFocusedInsights from "@/components/WhoWeAre/FutureFocusedInsights";
import ReadyToTransform from "@/components/WhoWeAre/ReadyToTransform";

import Hero from "@/components/WhatWeDo/ExperienceDesign/Hero";
import HeroText from "@/components/WhatWeDo/ExperienceDesign/HeroText";
import UIUXDesign from "@/components/WhatWeDo/ExperienceDesign/UIUXDesign";
import UserResearch from "@/components/WhatWeDo/ExperienceDesign/UserResearch";
import DesignSystems from "@/components/WhatWeDo/ExperienceDesign/DesignSystems";
import ProductDesign from "@/components/WhatWeDo/ExperienceDesign/ProductDesign";
import Prototyping from "@/components/WhatWeDo/ExperienceDesign/Prototyping";
import Accessibility from "@/components/WhatWeDo/ExperienceDesign/Accessibility";
import ServiceDesign from "@/components/WhatWeDo/ExperienceDesign/ServiceDesign";
import DesignProcess from "@/components/WhatWeDo/ExperienceDesign/DesignProcess";
import DesignToolsTechnologies from "@/components/WhatWeDo/ExperienceDesign/DesignToolsTechnologies";

const page = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            <div className="relative -mt-[64px] lg:-mt-[68px] h-[500px] sm:h-[700px] lg:h-[800px]">
                <Hero />
                <HeroText />
            </div>

            <UIUXDesign />
            <UserResearch />
            <DesignSystems />
            <ProductDesign />
            <Prototyping />
            <Accessibility />
            <ServiceDesign />
            <DesignProcess />
            <DesignToolsTechnologies />

            <FutureFocusedInsights />
            <ReadyToTransform />
            <Footer />
        </div>
    );
};

export default page;
