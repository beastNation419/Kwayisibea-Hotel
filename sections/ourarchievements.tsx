"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  duration?: number;
  suffix?: string;
};

function Counter({ target, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start when section appears after refresh/scroll
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startAnimation, target, duration]);

  return (
    <div ref={counterRef}>
      <h1 className="text-6xl text-white font-bold">
        {count}
        {suffix}
      </h1>
    </div>
  );
}

export default function OurAchievements() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/arch-bg.jpg')" }}
    >
      <div className="flex flex-row items-center gap-8 overflow-hidden md:justify-between max-w-7xl mx-auto px-6 md:px-30 py-10 hidden-fade">
        <div className="text-center shrink-0 min-w-25">
          <Counter target={2860} suffix="+" />
          <p className="text-md text-white opacity-80">Projects Completed</p>
        </div>

        <div className="text-center shrink-0 min-w-25">
          <Counter target={128} />
          <p className="text-md text-white opacity-80">Expert Landscapers</p>
        </div>

        <div className="text-center shrink-0 min-w-25">
          <Counter target={14} />
          <p className="text-md text-white opacity-80">Landscaping Awards</p>
        </div>

        <div className="text-center shrink-0 min-w-25">
          <Counter target={24} suffix="+" />
          <p className="text-md text-white opacity-80">Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
