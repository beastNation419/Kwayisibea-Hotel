"use client";

import Image from "next/image";
import PrinceEssel from "@/assets/prince-essel.jpeg";
import DwomohTawiah from "@/assets/dwomoh-tawiah.jpg";
import EbenezerDonkor from "@/assets/ebenezer-donkor.jpeg";
import EmmanuellaSarkodie from "@/assets/emmanuella-sarkodie.jpeg";
import SamuelAbankwa from "@/assets/samuel-abankwa.jpeg";

import "./carousel.css";
import { useState } from "react";

export default function OurTeam() {
  const teamItems = [
    {
      image: EbenezerDonkor,
      name: "Ebenezer Donkor",
      position: "Landscape Architect",
      desc: "Passionate about creating sustainable and visually appealing outdoor spaces that blend nature with modern design.",
      contact: "",
    },
    {
      image: EmmanuellaSarkodie,
      name: "Emmanuella Sarkodie",
      position: "Landscape Contractor",
      desc: "Experienced in delivering high-quality landscape projects with precision, creativity, and attention to detail.",
      contact: "",
    },
    {
      image: PrinceEssel,
      name: "Prince Essel",
      position: "Project Manager",
      desc: "Dedicated to coordinating projects efficiently while ensuring timely delivery and exceptional client satisfaction.",
      contact: "",
    },
    {
      image: DwomohTawiah,
      name: "Dwomoh Tawiah",
      position: "Landscape Designer",
      desc: "Creative landscape designer focused on transforming outdoor environments into functional and inspiring spaces.",
      contact: "",
    },
    {
      image: SamuelAbankwa,
      name: "Samuel Abankwah",
      position: "Architect",
      desc: "Innovative architect with a passion for designing modern, functional, and environmentally conscious structures.",
      contact: "",
    },
  ];

  const [index, setIndex] = useState(1);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % teamItems.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + teamItems.length) % teamItems.length);
  };

  return (
    <section className="bg-black/95 px-30 py-20">
      <div className="text-center text-white space-y-4 max-w-xl mx-auto hidden-up">
        <div className="text-green-600 text-lg">Meet Our Team</div>
        <h1 className="text-4xl font-semibold">
          Our Creative <span className="text-green-500">Team</span>
        </h1>
        <p className="opacity-70">
          Our team is dedicated to creating beautiful landscapes and caring for
          them with unmatched service.
        </p>
      </div>

      <div className="border-t border-green-950 mt-15">
        {" "}
        <div className="relative max-w-7xl mx-auto">
          <div className="carousel-container">
            <button className="arrow-left" onClick={prevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="carousel-track">
              {" "}
              {teamItems.map((item, i) => {
                let position = "hidden";

                if (i === index) {
                  position = "active";
                } else if (
                  i ===
                  (index - 1 + teamItems.length) % teamItems.length
                ) {
                  position = "prev";
                } else if (i === (index + 1) % teamItems.length) {
                  position = "next";
                }
                return (
                  <div
                    key={i}
                    className={`carousel-item ${position} bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-500`}
                  >
                    <div className="flex flex-col justify-center items-center p-3 space-y-4">
                      <Image
                        src={item.image}
                        width={200}
                        height={200}
                        alt={item.name}
                        className="object-cover aspect-square rounded-lg w-full"
                      />
                    </div>
                    <div className="max-w-60 mx-auto text-center space-y-2">
                      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 bg-green-600 text-white py-3 px-3 rounded-lg shadow-lg text-center w-[70%]">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm">{item.position}</p>
                      </div>
                      <p className="text-gray-600 text-sm mt-10">{item.desc}</p>

                      <div className="border-t border-green-600">
                        <a
                          href="#"
                          className="flex items-center justify-center p-6"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 text-green-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                              clipRule="evenodd"
                            />
                            {item.contact}
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="arrow-right" onClick={nextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            <div className="dot">
              {teamItems.map((item, i) => (
                <span
                  key={i}
                  className={i === index ? "active-dot" : ""}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
