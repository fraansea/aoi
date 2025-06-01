import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(
        startValue + (target - startValue) * easeOutQuart,
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-5xl lg:text-6xl xl:text-7xl font-medium text-black mb-2">
        {count}
        {suffix}
      </div>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    {
      number: 100,
      suffix: "+",
      label: "Products",
    },
    {
      number: 25,
      suffix: "+",
      label: "Projects",
    },
    {
      number: 80,
      suffix: "+",
      label: "satisfied Customers",
    },
  ];

  return (
    <div className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
                duration={2500 + index * 200} // Stagger the animations slightly
              />
              <p className="text-gray-600 text-base lg:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
