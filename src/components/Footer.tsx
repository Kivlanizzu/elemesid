export default function Footer() {
  return (
    <footer className="bg-green-50 px-6 md:px-20 py-12 text-sm text-gray-600 rounded-t-3xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-4">
            <img src="/images/elemesid.svg" alt="elemes.id" className="h-8" />
          </div>
          <p className="leading-relaxed">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,<br />
            Kecamatan Setiabudi, Kota Jakarta Selatan,<br />
            Daerah Khusus Ibukota Jakarta 12950
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-white p-3 rounded-full">
              <img src="/images/emailmini.svg" alt="Email" className="w-6 h-6" />
            </a>
            <a href="#" className="bg-white p-3 rounded-full">
              <img src="/images/phone.svg" alt="Phone" className="w-6 h-6" />
            </a>
            <a href="#" className="bg-white p-3 rounded-full">
              <img src="/images/ig.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Categories</h4>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-green-600 transition">Cupcake</a>
            <a href="#" className="hover:text-green-600 transition">Pizza</a>
            <a href="#" className="hover:text-green-600 transition">Kebab</a>
            <a href="#" className="hover:text-green-600 transition">Salmon</a>
            <a href="#" className="hover:text-green-600 transition">Doughnut</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-4">About Us</h4>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-green-600 transition">About Us</a>
            <a href="#" className="hover:text-green-600 transition">FAQ</a>
            <a href="#" className="hover:text-green-600 transition">Report Problem</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Newsletter</h4>
          <p className="mb-4 text-gray-500">
            Get now free 50% discount for all products on your first order
          </p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 rounded-l w-full focus:outline-none"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition">SEND</button>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <img src="/images/emailmini.svg" className="w-4 h-4" alt="email" />
            <span>elemesid@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/images/phonemini.svg" className="w-4 h-4" alt="phone" />
            <span>0888 1111 2222</span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs mt-12 text-gray-400">
        © 2021 ELEMES ID. ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}
