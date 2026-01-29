"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <section className="md:min-h-[60vh] min-h-[70vh] w-full flex flex-col items-center justify-center text-white relative py-12">
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
      `}</style>

      {/* Title + Nav buttons */}
      <div className="flex items-center justify-center gap-1 mb-10 z-10">
        {/* <button className="!relative !w-10 !h-10 !mt-0 rounded-full flex items-center justify-center transition-all">
          <ChevronLeft className="swiper-button-prev md:scale-80 scale-65 w-4 h-4 !text-[#E6E6E6]" />
        </button> */}
        
        <h2 className="text-md md:text-lg whitespace-nowrap text-[#E6E6E6]">Our Impact</h2>
        
        {/* <button className=" !relative !w-10 !h-10 !mt-0 rounded-full flex items-center justify-center transition-all">
          <ChevronRight className="swiper-button-next md:scale-80 scale-65 w-4 h-4 !text-[#E6E6E6]" />
        </button> */}
      </div>

      {/* Swiper */}
      <div className="w-[92%] md:w-[80%] z-10 relative">
        {/* Left + right soft fade background */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#0d011a] to-transparent z-[5]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#0d011a] to-transparent z-[5]" />
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white h-49 text-black border border-black/10 rounded-2xl p-6 shadow-lg relative overflow-hidden">

                <div className="flex gap-3 mb-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold text-base">{t.name}</h3>
                    <p className="text-xs text-gray-600 opacity-80">{t.role}</p>
                    <p className="text-sm text-[#1A1B1D] leading-tight mt-2 mb-6">{t.text}</p>

                <p className="text-xs text-gray-500 flex items-center gap-1">
                  {t.flag} Dico user, {t.date}
                </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}