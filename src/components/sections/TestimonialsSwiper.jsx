"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import TestimonialCard from "@/components/ui/TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function TestimonialsSwiper() {
  const testimonials = [
    {
      name: "Sophia Mitchell",
      role: "Music Artist & Podcaster",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      text: "<< Switching to this workflow has completely changed how fast we create content. Super smooth and extremely powerful. >>",
      date: "2024.02.18",
      flag: "🇺🇸",
    },
    {
      name: "Martin Goutry",
      role: "Back-end Developer at MyDodow",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      text: "<< The automation features saved us hours every week. The experience feels modern and incredibly intuitive. >>",
      date: "2024.01.09",
      flag: "🇫🇷",
    },
    {
      name: "Michael Reed",
      role: "YouTube Creator (85k subscribers)",
      img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      text: "<< The UI is clean, smooth, and just makes sense. I love how effortless it is to set everything up. Highly recommend! >>",
      date: "2024.03.11",
      flag: "🇬🇧",
    },
    // ---- NEW UPDATED BOTTOM 3 ----
    {
      name: "Emily Carter",
      role: "Founder at Nova Studio",
      img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      text: "<< A total game-changer for scaling our creative process. We reduced manual editing time by more than half. Outstanding support and experience! >>",
      date: "2024.04.22",
      flag: "🇨🇦",
    },
    {
      name: "Daniel Rossi",
      role: "Product Designer",
      img: "https://images.unsplash.com/photo-1590650618955-d682df736c40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "<< The workflow integration feels seamless and well-thought-out. It helped our team produce consistent results while staying efficient. >>",
      date: "2024.05.10",
      flag: "🇮🇹",
    },
    {
      name: "Ava Thompson",
      role: "Marketing Lead at GrowthLab",
      img: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      text: "<< We've seen a major boost in engagement and content quality. The tools are simple to use and incredibly powerful for scaling campaigns. >>",
      date: "2024.06.03",
      flag: "🇦🇺",
    },
  ];


  return (
    <section className="w-full flex flex-col items-center justify-center text-white relative pt-0 pb-8">
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #ffffff !important;
          opacity: 1;
        }
        .swiper:hover .swiper-slide {
          animation-play-state: paused;
        }
        .swiper-slide-active {
          z-index: 50 !important;
        }
      `}</style>

      {/* Title + Nav buttons */}
      <div className="flex items-center justify-center gap-1 mb-8 z-10">
        <h2 className="text-sm md:text-base font-semibold uppercase tracking-wider text-gray-400">Our Impact</h2>
      </div>

      {/* Swiper Container */}
      <div className="w-full max-w-[1000px] z-10 relative px-4 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="!pb-16"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto flex transition-all duration-500 opacity-40 [&.swiper-slide-active]:opacity-100 [&.swiper-slide-prev]:opacity-60 [&.swiper-slide-next]:opacity-60 [&.swiper-slide-prev]:scale-90 [&.swiper-slide-next]:scale-90">
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}