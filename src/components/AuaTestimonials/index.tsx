"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "I had the pleasure of working with upsense for the design of my landing page, and I must say, the experience was nothing short of exceptional. From the onset, they demonstrated a deep understanding of design principles, user experience, and aesthetics that are crucial for crafting engaging online spaces.",
    name: "Juan Manuel",
    role: "CEO - Arenaton",
    avatar: "/avatars/juan.png",
  },
  {
    id: 2,
    text: "I recommend upsense to anyone who looks for quality and elegance. They had been creative, passionate and above all competent throughout the process during our engagement. We had received outstanding reactions for our website and those are amazingly positive which made a clear growth in our business as well.",
    name: "Lawrance de Silva",
    role: "CEO @ Burgundy Consultants",
    avatar: "/avatars/lawrance.png",
  },
  {
    id: 3,
    text: "I have been primarily working with upsense since 2020 and it’s been fantastic! They work quickly and produce consistently quality results. Upsense takes my ideas and turns them into a professional design that meets my objectives. And they prioritize the piece’s usefulness as much as its aesthetic design. I highly recommend them.",
    name: "Aishat Azma",
    role: "Founder - Dreamero",
    avatar: "/avatars/aishat.png",
  },
  {
    id: 4,
    text: "It was a fantastic experience working with upsense. As someone who is new to this space, I was able to provide only limited guidance on what I wanted, but they somehow delivered exactly what I was looking for right off the bat.",
    name: "Neeraj RJ",
    role: "CEO FintechVB",
    avatar: "/avatars/neeraj.png",
  },
  {
    id: 5,
    text: "Upsense combined business vision with good communication, and we were always confident working with them on web development projects.",
    name: "Chris Howard",
    role: "CTO - Example Co.",
    avatar: "/avatars/other.png",
  },
];

const BRANDS = [
  "Burgundy",
  "Fiverr",
  "HiraTribe",
  "Fintech",
  "HPR",
  "Learning Point",
  "UNHCR",
  "Synapzter",
];

export default function AuaTestimonials() {
  return (
    <section className="aua-testimonials" data-aos="fade-up">
      <div className="aua-testimonials__inner">
        {/* ===== Heading ===== */}
        <h2 className="aua-testimonials__heading">
          Hear the <span>praise</span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          className="aua-testimonials__swiper"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={900}
          loop={TESTIMONIALS.length > 1}
          autoHeight={true}
          slidesPerView={3}
          spaceBetween={52}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 52 },
          }}
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="aua-testimonials__card">
                <p className="aua-testimonials__text">{item.text}</p>

                <div className="aua-testimonials__author">
                  <div className="aua-testimonials__avatar-wrap">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="aua-testimonials__avatar"
                    />
                  </div>
                  <div className="aua-testimonials__author-info">
                    <div className="aua-testimonials__author-name">
                      {item.name}
                    </div>
                    <div className="aua-testimonials__author-role">
                      {item.role}
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== BRAND SWIPER ===== */}
        <div className="aua-testimonials__brands">
          <p className="aua-testimonials__brands-caption">
            Teamed up with awesome brands through the years.
          </p>

          <Swiper
            modules={[Pagination, Autoplay]}
            className="aua-testimonials__brands-swiper"
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            speed={900}
            loop={BRANDS.length > 1}
            slidesPerView={6}
            spaceBetween={40}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 28 },
              992: { slidesPerView: 5, spaceBetween: 32 },
              1200: { slidesPerView: 6, spaceBetween: 40 },
            }}
          >
            {BRANDS.map((name) => (
              <SwiperSlide key={name}>
                <div className="aua-testimonials__brand">{name}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
