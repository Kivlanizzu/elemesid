"use client"
import React from "react";

const categories = [
  { name: "Cupcake", items: 22, bgColor: "#F1FCEB" },
  { name: "Pizza", items: 25, bgColor: "#EAF4F5" },
  { name: "Kebab", items: 12, bgColor: "#EAEFFC" },
  { name: "Salmon", items: 22, bgColor: "#FCEFF3" },
  { name: "Doughnut", items: 11, bgColor: "#F9FAD5" },
];

export default function CategoryList() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'next' | 'prev') => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = 200;
    current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="px-6 py-10 relative">
      <h2 className="text-3xl font-bold mb-1">Browser Our Category</h2>
      <p className="text-green-600 text-xl font-semibold mb-6">Receipt</p>


      <div className="overflow-x-auto md:overflow-visible">
        <div
          className="flex md:grid md:grid-cols-5 gap-5"
          ref={scrollRef}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="min-w-[150px] md:min-w-0 rounded-xl text-center py-6 px-4 transform transition duration-300 hover:scale-105 cursor-pointer shadow-md"
              style={{
                backgroundColor: cat.bgColor
              }}
            >
              <div className="mb-3">
                <img
                  src={`/images/${cat.name.toLowerCase()}.svg`}
                  alt={cat.name}
                  className="w-14 h-14 mx-auto"
                />
              </div>
              <h3 className="font-semibold text-black text-lg">{cat.name}</h3>
              <p className="text-sm text-gray-600">{cat.items} Items</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden p-4 md:flex gap-2 absolute right-4 z-10">
        <button
          onClick={() => scroll("prev")}
          className="flex items-center gap-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md cursor-pointer"
          aria-label="Scroll Left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg><span className="text-sm font-medium">Prev</span>
        </button>

        <button
          onClick={() => scroll("next")}
          className="flex items-center gap-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md cursor-pointer"
          aria-label="Scroll Right"
        >
          <span className="text-sm font-medium">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
