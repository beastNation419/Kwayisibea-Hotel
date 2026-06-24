import Image from "next/image";
import Button from "@/components/common/Button";
import About1 from "@/assets/about-1.jpg";
import About2 from "@/assets/about-2.jpg";
import About3 from "@/assets/about-3.jpg";
import About4 from "@/assets/about-4.jpg";
import About5 from "@/assets/about-5.jpg";
import About6 from "@/assets/about-6.jpg";
import About7 from "@/assets/about-7.jpg";
import About8 from "@/assets/about-8.png";

export default function About() {
  return (
    <section
      style={{
        backgroundImage: "url('contour-bg (2).png')",
        backgroundSize: "500px",
      }}
      className="bg-[#011010] bg-no-repeat relative px-4 sm:px-16 xl:px-24"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 px-4 sm:px-10 py-5 max-w-8xl mx-auto">
        <div className="w-full max-w-sm text-white">
          <div className="font-bold text-xl">01</div>
          <h2 className="font-semibold">Guarantee Service</h2>
          <p className="text-sm opacity-80">
            We stand behind every landscape we design and build. From concept to
            completion, our process is structured, transparent, and
            quality-controlled.
          </p>
        </div>

        <div className="hidden md:block w-2 h-40 bg-white/6"></div>

        <div className="w-full max-w-sm text-white">
          <div className="font-bold text-xl">02</div>
          <h2 className="font-semibold">Quality Material</h2>
          <p className="text-sm opacity-80">
            Our landscapes are crafted using carefully selected, high-quality
            materials, natural stone, durable hardscape elements, and healthy
            plant species suited to the environment. This ensures beauty,
            sustainability, and performance over time.
          </p>
        </div>

        <div className="hidden md:block w-2 h-40 bg-white/6"></div>

        <div className="w-full max-w-sm text-white">
          <div className="font-bold text-xl">03</div>
          <h2 className="font-semibold">No Hidden Cost</h2>
          <p className="text-sm opacity-80">
            We believe great design starts with trust. Our pricing is clear and
            upfront, with detailed project scopes and transparent budgets so you
            know exactly what to expect, with no surprises along the way.
          </p>
        </div>

        <div className="hidden md:block w-2 h-40 bg-white/6"></div>

        <div className="w-full max-w-sm text-white">
          <div className="font-bold text-xl">04</div>
          <h2 className="font-semibold">Dedicated Team</h2>
          <p className="text-sm opacity-80">
            Our team of landscape architects, designers, and contractors work
            collaboratively to bring your vision to life. With technical
            expertise and creative precision, we remain fully engaged throughout
            every phase of the project.
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-8 py-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 relative max-w-2xl mx-auto">
          <Image
            src={About1}
            width={600}
            height={600}
            alt="about-image"
            className="object-cover aspect-3/2 rounded-xl"
          />
          <Image
            src={About2}
            width={600}
            height={600}
            alt="about-image"
            className="object-cover aspect-3/2 rounded-xl"
          />
          <Image
            src={About3}
            width={600}
            height={600}
            alt="about-image"
            className="object-cover aspect-3/2 rounded-xl"
          />
          <Image
            src={About4}
            width={600}
            height={600}
            alt="about-image"
            className="object-cover aspect-3/2 rounded-xl xl:row-start-1 xl:col-start-3 xl:col-span-1"
          />
          <Image
            src={About5}
            width={600}
            height={600}
            alt="about-image"
            className="object-cover aspect-3/2 rounded-xl xl:row-start-1 xl:col-span-2"
          />
          <Image
            src={About6}
            width={600}
            height={600}
            alt="about-image"
            className="object-cover aspect-3/2 rounded-xl xl:row-start-2 xl:col-start-3"
          />
          <Image
            src={About7}
            width={600}
            height={600}
            alt="about-image"
            className="object-cover aspect-3/2 rounded-xl"
          />
          <Image
            src={About8}
            width={600}
            height={600}
            alt="about-image"
            className="object-cover aspect-3/2 rounded-xl"
          />
        </div>
        <div className="absolute top-56 left-120 hidden lg:flex items-center justify-center px-2 rounded-xl">
          <h1 className="section-title">25+</h1>
          <p className="section-description opacity-80">
            Years Of
            <br /> Experience
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url('potted-monstera.png')",
            backgroundSize: "200px",
            backgroundPosition: "top 20rem left 15rem",
          }}
          className="text-white py-10 bg-no-repeat hidden-right"
        >
          <div className="text-xl text-green-700">About Us</div>
          <h1 className="text-4xl text-white">
            Neighborhood Trees, Shrub
            <br /> & Lawn{" "}
            <strong className="text-4xl text-green-600">
              Care Professional
            </strong>
          </h1>
          <p className="mt-6 opacity-80">
            Our employees are the backbone of our company. [company name] has an
            <br />
            ongoing employee training program that includes a regular schedule
            of
            <br />
            seminars and information updates on turf ofety procedurs.
          </p>
          <p className="mt-6 opacity-80 mb-4">
            great explorer of the truth, the master-builder of human happiness.
            No
            <br />
            one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure.
          </p>
          <Button size="large" shape="rounded-full">
            GET A QUOTE
          </Button>
          <div className="flex items-center justify-center py-10"></div>
        </div>
      </div>
    </section>
  );
}
