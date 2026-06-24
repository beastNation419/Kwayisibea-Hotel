export default function Testimonials() {
  const TestimonialItems = [
    {
      image: "",
      name: "John Yanney",
      rate: "95%",
      comment:
        "Get Tree transformed our outdoor space into a well-designed, functional landscape. Their attention to detail, plant selection, and overall execution exceeded our expectations.",
    },
    {
      image: "",
      name: "Godfred Blay",
      rate: "80%",
      comment:
        "The team delivered a clean and sustainable garden design that perfectly fits our property. Their professionalism and clear communication made the entire process smooth.",
    },
    {
      image: "",
      name: "Patrick Morgan",
      rate: "90%",
      comment:
        "From consultation to completion, the service was exceptional. The irrigation and planting solutions were thoughtfully designed and beautifully executed.",
    },
    {
      image: "",
      name: "Daniel Annan",
      rate: "85%",
      comment:
        "Reliable, skilled, and efficient. Get Tree’s maintenance and landscaping services have significantly improved the health and appearance of our garden.",
    },
  ];
  return (
    <section className="bg-black py-10 px-30 overflow-hidden">
      <div>
        <div className="border-b border-green-950">
          {" "}
          <div className="flex flex-row items-center jusify-between gap-25 max-w-4xl mx-auto mb-10">
            <div className="text-8xl font-bold">372+</div>
            <div className="flex flex-col justify-center space-y-4 hidden-up">
              <div className="text-xl text-green-700">Testimonials</div>
              <h1 className="text-4xl text-white">
                Global Clients Happy to Get{" "}
                <span className="text-green-700">Our Gardening Services</span>
              </h1>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="flex animate-loop-scroll animate-loop-scroll:hover w-max gap-8 mt-10"
        >
          {TestimonialItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex flex-col space-y-4 max-w-md mx-auto">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-md text-black">
                    {item.name}
                  </h3>
                  <span className="text-green-700 opacity-80">{item.rate}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
