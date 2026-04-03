import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProofOfWork = () => {
  // === ADD YOUR TELEGRAM / WORK SCREENSHOTS HERE ===
  const workImages = [
    {
      title: "Telegram Community Growth",
      description: "Successfully managed and moderated 5k+ members.",
      image: "public/mod.jpg", // <--- Path to your screenshot
    },
    {
      title: "Web3 Moderation",
      description: "Proof of active engagement and raid coordination.",
      image: "public/blog.jpeg", // <--- Path to your screenshot
    },
    {
      title: "Frontend Delivery",
      description: "UI implementation for a DeFi dashboard.",
      image: "public/crypto.jpeg", // <--- Path to your screenshot
    },
  ];

  return (
    <section id="proof-of-work" className="py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* TITLE - Matches your Tech Stack font/size */}
        <h2 className="text-3xl md:text-4xl font-black mb-16 tracking-tighter">
          Proof of <span className="text-[#FACC15]">Work</span>
        </h2>

        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 4000 }}
            loop={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            spaceBetween={50}
            slidesPerView={1}
            className="pb-12"
          >
            {workImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center space-y-8">
                  
                  {/* THE WORK IMAGE - Styled like the testimonial center-piece */}
                  <div className="w-full max-w-2xl aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover md:object-contain bg-[#111]"
                    />
                  </div>

                  {/* LABEL & DESCRIPTION */}
                  <div className="space-y-2">
                    <h3 className="text-[#FACC15] font-bold tracking-widest text-xl uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 max-w-md mx-auto font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CIRCLE NAVIGATION BUTTONS - Exactly like the red circles in your sketch */}
          <button className="prev-btn absolute left-0 top-[40%] -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all">
            <span className="text-lg font-bold">{"<"}</span>
          </button>
          
          <button className="next-btn absolute right-0 top-[40%] -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all">
            <span className="text-lg font-bold">{">"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;