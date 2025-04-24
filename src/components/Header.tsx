const Header = () => {
  return (
    <header className="flex bg-white justify-between items-center px-10 py-4 shadow-sm">
      <div className="flex items-center">
        <img
          src="/images/elemesid.svg"
          alt="elemes.id"
          className="h-8 w-auto cursor-pointer"
        />
      </div>

      <nav className="hidden md:flex space-x-6 items-center text-sm font-semibold text-gray-600">
        <a href="#" className="hover:text-green-600 cursor-pointer">
          Home
        </a>
        <a href="#" className="hover:text-green-600 cursor-pointer">
          About
        </a>
        <div className="relative flex items-center gap-1 cursor-pointer">
          <a href="#" className="hover:text-green-600">
            Promotions
          </a>
          <span className="bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full font-bold">
            HOT
          </span>
        </div>
        <a href="#" className="hover:text-green-600 cursor-pointer">
          Blogs
        </a>
        <a href="#" className="hover:text-green-600 cursor-pointer">
          Contact Us
        </a>
      </nav>

      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-2 md:hidden z-50">
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-green-600 text-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Home
        </a>

        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-green-600 text-xs relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Promotions

          <span className="absolute -top-1 right-2 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full font-bold">
            HOT
          </span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-green-600 text-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Others
        </a>
      </nav>


      <div className="flex items-center space-x-4 text-sm font-medium">
        <button className="text-gray-600 cursor-pointer">Masuk</button>
        <button className="bg-[#8BAC3E] text-white px-5 py-2 rounded-full hover:opacity-90 transition cursor-pointer">
          Daftar Sekarang
        </button>
      </div>
    </header>
  );
};

export default Header;
