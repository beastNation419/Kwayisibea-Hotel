import Link from "next/link";
import Image from "next/image";
import Leaf from "@/assets/leaf-logo.png";

export default function Footer() {
  return (
    <footer className="bg-black/85">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-7xl mx-auto gap-10 py-10 px-10 ">
        <div className="w-full md:w-1/3 max-w-md space-y-2">
          <Image
            src={Leaf}
            width={60}
            height={60}
            alt="leaf-logo"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-md text-green-700 flex items-center">
            [Company Name] has an ongoing training program that includes a
            regular schedule of seminars and information updates greate explorer
            pf the truth, the master builder.
          </p>
        </div>

        <div className="w-full md:w-1/3 space-y-2">
          <h3 className="text-2xl text-white border-b border-white/10 py-2">
            Useful Links
          </h3>
          <div className="text-green-700  text-xs">
            <ul className="grid grid-cols-2 space-x-15 space-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/appointment">Appointment</Link>
              </li>
              <li>
                <Link href="/Experts">Meet Experts</Link>
              </li>
              <li>
                <Link href="/policy">Private Policy</Link>
              </li>
              <li>
                <Link href="/quote">A Quote</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/location">Location</Link>
              </li>
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-2xl text-white border-b border-white/10 py-2">
            Recent Posts
          </h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center text-green-700 text-sm py-6 border-t border-white/10">
        Copyright © {new Date().getFullYear()} Accra. All rights reserved.
        Privacy Policy
      </div>
    </footer>
  );
}
