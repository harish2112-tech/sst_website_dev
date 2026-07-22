"use client";

import CareersLayout from "@/components/Careers/CareersLayout";
import CareersHeroText from "@/components/Careers/CareersHeroText";
import JoinUsPanel from "@/components/Careers/JoinUsPanel";
import JobListingSection from "@/components/Careers/JobListingSection";
import WhatYouWantToDo from "@/components/Careers/WhatYouWantToDo";
import TeamStory from "@/components/Careers/TeamStory";
import LearningDevelopment from "@/components/Careers/LearningDevelopment";
import OurCulture from "@/components/Careers/OurCulture";
import GrowthQuoteBand from "@/components/Careers/GrowthQuoteBand";
import WhatSetsUsApart from "@/components/Careers/WhatSetsUsApart";
import JoinUsSocialBand from "@/components/Careers/JoinUsSocialBand";
import careerHeroBg from "@/assets/career/Hero Image.svg";

const page = () => {
    return (
        <CareersLayout
            heroBg={careerHeroBg}
            heroAspectRatio
            heroContent={<CareersHeroText />}
            afterContent={
                <>
                    <JoinUsPanel />
                    <JobListingSection />
                    <WhatYouWantToDo />
                    <TeamStory />
                    <LearningDevelopment />
                    <GrowthQuoteBand />
                    <OurCulture />
                    <WhatSetsUsApart />
                    <JoinUsSocialBand />
                </>
            }
        />
    );
};

export default page;
