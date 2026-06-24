import Button from "@/components/common/Button";

export default function Home() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center relative"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/20 to-black/1 z-0" />
      <div className="space-y-2 px-30 max-w-4xl hidden-up">
        <h1
          className="text-7xl text-white leading-[0.95]
            tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Excellence In
          <br /> Landscaping Services
        </h1>
        <p className="text-md text-white max-w-xl mx-auto">
          We create environmentally responsible landscapes through thoughtful
          design, plant science, and sustainable land-use strategies shaping
          outdoor spaces that thrive naturally over time.
        </p>
        <div className="flex items-center gap-4">
          <Button size="large" shape="rounded-full">
            GET A QUOTE
          </Button>
          <button className="bg-transparent px-8 py-1 text-center rounded-full border border-gray-400 text-white hover:border-none hover:bg-green-700 hover:text-white hover:cursor-pointer transition duration-300 hover:scale-90">
            SERVICES
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-10 inline-block text-white text-sm border-b border-gray-500 backdrop-blur-md rounded-xl px-4 py-2 mb-6 hidden-right">
        We Have
        <br /> More Than 24 Years Experience
      </div>
    </section>
  );
}
