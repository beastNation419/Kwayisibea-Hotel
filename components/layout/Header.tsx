import Link from "next/link";
import Image from "next/image";
import Leaf from "@/assets/leaf-logo.png";
import Button from "@/components/common/Button";

export default function Header() {
  return (
    <div className="flex justify-center items-center">
      <header className="flex flex-row items-center justify-between px-6 py-2 w-3xl text-sm text-white bg-black/40 rounded-full fixed top-5 z-50 left-1/2 -translate-x-1/2">
        <Link href="/">
          {" "}
          <Image
            src={Leaf}
            alt="leaf-logo"
            width={40}
            height={40}
            style={{ height: "auto", width: "auto" }}
            className="flex justify-center items-center"
            priority
          />
        </Link>
        <div className="">
          <nav className="flex items-center justify-center">
            <ul className="flex flex-row items-center justify-between gap-8">
              <li className="hover:text-green-600 transition duration-300 hover:scale-115">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:text-green-600 duration-300 hover:scale-115">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="hover:text-green-600 duration-300 hover:scale-115">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="hover:text-green-600 duration-300 hover:scale-115">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </a>

          <Button size="small" shape="rounded-full">
            GET A QUOTE
          </Button>
        </div>
      </header>
    </div>
  );
}
