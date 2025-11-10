import { useState, useEffect } from "react";


export const Slider = () => {
  const slides = [
    "/Hero Image Right.jpg",
    "/Hero Image Left.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    setProgress(0);
    const duration = 5000;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent >= 100) {
        clearInterval(interval);
        nextSlide();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="flex justify-between">
    <div className="relative w-full mb-2 flex justify-center md:justify-start items-start md:w-[90%] h-[250px] md:h-[500px] overflow-hidden rounded-2xl ml-0 md:ml-[30px]">
      {/* Слайды */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div key={index} className="min-w-full h-[500px]">
            <img
              src={src}
              alt={`Слайд ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* === Текст поверх === */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide drop-shadow-lg text-right">
        Ткань <br/>для одежды
      </div>

      {/* Стрелки */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-dark rounded-full p-2 shadow-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-dark rounded-full p-2 shadow-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Прогресс-линия */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 w-[80%] max-w-[600px]">
        {slides.map((_, index) => {
          let width = 0;
          if (index < current) width = 100;
          else if (index === current) width = progress;
          else width = 0;

          return (
            <div key={index} className="flex-1 bg-white/40 h-1 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-200"
                style={{ width: `${width}%` }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>

</div>
  );
};
