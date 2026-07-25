"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const linkedinPosts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7485555091391860736?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7480493125216522240?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7477579270551355392?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7475778249621393408?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7473230546077122561?collapsed=1",
];


export default function LinkedInCarousel() {

    return (
        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">

                    <h2 className="text-3xl font-bold">
                        Follow Us On LinkedIn
                    </h2>


                    {/* Navigation Buttons */}
                    <div className="flex gap-3">

                        <button
                            className="linkedin-prev w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>


                        <button
                            className="linkedin-next w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                    </div>

                </div>


                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}

                    navigation={{
                        prevEl: ".linkedin-prev",
                        nextEl: ".linkedin-next",
                    }}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    loop={true}

                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {linkedinPosts.map((post, index) => (
                        <SwiperSlide key={index}>

                            <div className="h-[560px] rounded-sm overflow-hidden">

                                <iframe
                                    src={post}
                                    className="w-full h-[650px] -translate-y-1"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowFullScreen
                                    title={`LinkedIn Post ${index + 1}`}
                                />

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

        </section>
    );
}
