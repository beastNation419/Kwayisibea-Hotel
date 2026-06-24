import Card from "@/components/common/Card";
import { GETTREELISTINGSAMPLE } from "@/constants";
import Image from "next/image";
import Prunning from "@/assets/prunnig.jpg";

export default function GetTree() {
  return (
    <section
      style={{
        backgroundImage: "url('monstera-bg.png')",
        backgroundSize: "20%",
        backgroundPosition: "left 0 top 170px",
      }}
      className="bg-green-200 bg-no-repeat px-30 py-8"
    >
      <div className="flex flex-col items-center justify-center text-center space-y-2 py-5 max-w-xl mx-auto hidden-up">
        <div className="text-xl text-green-700">What We Do</div>
        <h1 className="section-title-1">
          What You Can Do <br />
          With <span className="text-green-600">Get Tree</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 max-w-6xl mx-auto">
        {GETTREELISTINGSAMPLE.map((item, index) => (
          <Card
            key={index}
            className={`relative flex flex-col h-50 bg-white p-4 rounded-xl shadow-md border border-black/30 overflow-hidden ${index === 0 || index === 2 ? "hidden-left" : "hidden-right"}`}
          >
            {index === 1 && (
              <Image
                src={Prunning}
                alt="Prunning Plants"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority={index === 1}
              />
            )}
            <div className="flex justify-center">
              <div
                className={`relative z-10 p-2 rounded-lg ${index === 1 ? "bg-white/15 backdrop-blur-md border border-white/10 text-white h-42" : "bg-white text-black"}`}
              >
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
                <button className="font-semibold">Read More</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
