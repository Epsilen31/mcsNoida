import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    if (autoSlide) {
      const timer = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);

      return () => clearInterval(timer);
    }
  }, [current, autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative z-0">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} alt="" />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button
          onClick={previousSlide}
          className=" opacity-50 hover:bg-black rounded-full"
        >
          <ChevronLeft color="white" size={40} />
        </button>
        <button
          onClick={nextSlide}
          className=" opacity-50 hover:bg-black rounded-full"
        >
          <ChevronRight color="white" size={40} />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer  ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
