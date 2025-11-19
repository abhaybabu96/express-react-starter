// src/components/HeroSection.jsx
import React from "react";

/**
 * Props:
 *  - title: string
 *  - subtitle: string or JSX
 *  - image: url string
 *  - ctaText: string (optional)
 *  - ctaHref: string (optional)
 *  - reverse: boolean (if true -> image right, text left)
 *  - imgAlt: string
 */
export default function HeroSection({
  title,
  subtitle,
  image,
  ctaText,
  ctaHref = "#",
  reverse = false,
  imgAlt = "hero image",
}) {
  return (
    <section className="w-full py-12">
      <div
        className={`mx-auto px-6 md:px-8 lg:px-12 grid gap-6 items-center ${
          reverse ? "md:grid-cols-2 md:grid-flow-col-dense" : "md:grid-cols-2"
        }`}
      >
        {/* Image */}
        <div
          className={`order-1 ${reverse ? "md:col-start-2" : "md:col-start-1"}`}
        >
          <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-md bg-gray-100">
            <img
              src={image}
              alt={imgAlt}
              loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className={`order-2 ${reverse ? "md:col-start-1" : "md:col-start-2"} `}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <div className="text-gray-700 mb-6">{subtitle}</div>

          <div className="flex items-center gap-3">
            {ctaText && (
              <a
                href={ctaHref}
                className="inline-block bg-black text-white px-5 py-3 rounded-md shadow hover:opacity-90 transition"
              >
                {ctaText}
              </a>
            )}
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 transition"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
