export default function Hero() {
  return (
    <section className="px-6 py-12 text-center md:text-left md:flex md:items-center md:justify-between 
             bg-[url('/images/background.svg')] bg-cover bg-center bg-no-repeat 
             bg-[rgba(255,255,255,0.6)] bg-blend-overlay"
>

      <div className="mb-8 md:mb-0 md:w-1/2">
        <h1 className="text-4xl font-bold text-green-700 mb-2">Good Food Us</h1>
        <h1 className="text-4xl font-bold text-green-700 mb-4">Good Mood</h1>
        <p className="text-gray-600 mb-6">
          I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
            Daftar Sekarang
          </button>
          <button className="border border-gray-300 px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
            About Us
          </button>
        </div>
      </div>
      
      <div className="md:w-1/2 relative flex justify-center">
        <img
          src="/images/salad.svg"
          alt="Green Salad Tomato"
          className="w-80 hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -bottom-8 left-4 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 w-72 hover:scale-105 transition-transform duration-300">
          <img
            src="/images/salad.svg"
            alt="Thumbnail"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">Green Salad Tomato</p>
            <p className="text-xs text-gray-500 mb-1">Tomato</p>
            <div className="text-yellow-400 text-sm">★★★★☆</div>
          </div>
        </div>
      </div>
    </section>
  );
}
