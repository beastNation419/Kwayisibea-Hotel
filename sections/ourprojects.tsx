"use client";
import Image from "next/image";
import Button from "@/components/common/Button";
import Project5 from "@/assets/project-5.jpg";
import Project1 from "@/assets/project-1.jpg";
import Project2 from "@/assets/project-2.jpg";
import Project3 from "@/assets/project-3.jpg";
import Project4 from "@/assets/project-4.jpg";
import Project6 from "@/assets/project-6.jpg";
import Project7 from "@/assets/project-7.jpg";
import Project8 from "@/assets/project-8.jpg";
import { useEffect } from "react";

export default function OurProjects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            if (entry.target.classList.contains("hidden-fade")) {
              entry.target.classList.add("show-fade");
            }
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    const hiddenElements = document.querySelectorAll(
      ".hidden-left, .hidden-right, .hidden-up, .hidden-fade",
    );

    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        backgroundImage: "url('rubber-plant.png')",
        backgroundSize: "300px",
        backgroundPosition: "top 55rem left 75rem",
      }}
      className="bg-black bg-no-repeat bg-right"
    >
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-col ml-30 hidden-left">
          <div className="text-xl text-green-700 mt-6">Our Projects</div>
          <h1 className="text-4xl text-white max-w-md mb-4">
            We have Successful{" "}
            <span className="text-green-600">50+More Projects</span>
          </h1>
          <div className="grid grid-cols-3 grid-rows-3 gap-4 h-110 w-150">
            {/* A */}
            <div className="relative col-start-1 row-start-1 rounded-lg">
              <Image
                src={Project4}
                alt="project-4"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>

            {/* B */}
            <div className="relative col-start-2 row-start-1 rounded-lg overflow-hidden">
              <Image
                src={Project2}
                alt="project-2"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* C (Tall right image) */}
            <div className="relative col-start-3 row-start-1 row-span-2 rounded-lg overflow-hidden">
              <Image
                src={Project6}
                alt="project-6"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* D (Large main image) */}
            <div className="relative col-start-1 col-span-2 row-start-2 row-span-2 rounded-lg overflow-hidden">
              <Image
                src={Project1}
                alt="project-1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* E (Bottom-right small image) */}
            <div className="relative col-start-3 row-start-3 rounded-lg overflow-hidden">
              <Image
                src={Project3}
                alt="project-3"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <Image
            src={Project5}
            alt="project-1"
            width={700}
            height={900}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <Button size="large" shape="rounded-full">
          EXPLORE MORE
        </Button>
      </div>

      <div className="flex flex-row max-w-7xl mx-auto items-center justify-between gap-4 mt-10 overflow-hidden">
        <Image
          src={Project8}
          alt="project-8"
          className="size-120 rounded-lg hidden-left"
        />
        <div className="max-w-md mx-auto space-y-4 hidden-right">
          <div className="text-xl text-green-700">Why Choose Us</div>
          <h1 className="text-4xl text-white">
            People Choose Us For{" "}
            <span className="text-green-600">Our Great Offers</span>
          </h1>
          <p className="opacity-80 text-white">
            Our bundle of gardening services include paving, turning artificial
            grass, decking, fencing, gravelling, planting, sheds and storage
            solutions and more. We are devoted to provide the best garden.
          </p>
          <Button size="large" shape="rounded-full">
            GET A QUOTE
          </Button>
        </div>
      </div>

      <div className="flex flex-row py-20 max-w-5xl hidden-left">
        <div className="bg-green-700 py-10 px-8 md:px-30">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="text-white text-xl">Our Commitment</div>
            <h1 className="text-4xl text-white max-w-md">
              The Most Reliable Professional Company for Gardening
            </h1>
            <p className="text-sm text-white">
              We are committed to delivering sustainable, well-crafted
              landscapes through expert planning, responsible practices, and
              dependable service. Every project is handled with care from the
              first consultation to long-term maintenance ensuring healthy
              outdoor spaces that last.
            </p>
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-4 md:w-1/2">
                <div className="flex flex-row gap-4 items-start md:items-center">
                  <div className="flex items-center justify-center bg-white opacity-40 w-15 h-15 rounded-full text-2xl">
                    01
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-md text-white">Consultation</h3>
                    <p className="text-sm text-white opacity-80">
                      Advise our Customers
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col text-white text-md py-5 gap-2">
                  <li>✓ No Chemicals</li>
                  <li>✓ No water waste</li>
                  <li>✓ Free Estimate</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 md:w-1/2">
                <div className="flex flex-row gap-4 items-start md:items-center">
                  <div className="flex items-center justify-center bg-white opacity-40 w-15 h-15 rounded-full text-2xl">
                    02
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-md text-white">Consultation</h3>
                    <p className="text-sm text-white opacity-80">
                      Advise our Customers
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col text-white text-md opacity-90 py-5 gap-2">
                  <li>✓ No Insects</li>
                  <li>✓ No Waste</li>
                  <li>✓ UPfront Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={Project7}
          width={200}
          height={300}
          alt="project-7"
          style={{ width: "50%", height: "auto" }}
          className="object-cover"
        />
      </div>

      <div className="bg-white/50 backdrop-blur-md rounded-xl max-w-7xl mx-auto">
        <div className="-mt-30 p-10">
          <div className="flex items-center justify-between text-white">
            <h2 className="font-semibold text-2xl">
              Get Notified About The Event!
              <br /> <span className="text-green-800">Subscribe Today</span>
            </h2>
            <div className="relative w-full max-w-md">
              <input
                name="email"
                type="email"
                placeholder="you@gmail.com"
                className="w-full py-2 px-4 bg-green-800 opacity-40 rounded-full focus:outline-none backdrop-blur-sm"
              />
              <button className="px-8 py-2 bg-green-800 text-white rounded-full mt-8 hover:bg-green-900 cursor-pointer absolute right-0.5 -top-8">
                <div className="flex flex-row gap-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  Subscribe
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
