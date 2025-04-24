const trending = [
  { title: "Pizza Paperoni", category: "Pizza", rating: 4, bgColor: "#E6F3F5" },
  { title: "Pizza Meat", category: "Pizza", rating: 4, bgColor: "#E6F3F5" },
  { title: "Doner Kebab", category: "Kebab", rating: 5, bgColor: "#EAEEFA" },
  { title: "Salmon Roll", category: "Salmon", rating: 4, bgColor: "#F9EEF3" },
  { title: "Cupcake Choco", category: "Cupcake", rating: 5, bgColor: "#EAEEFA" },
  { title: "Doughnut Milk", category: "Doughnut", rating: 5, bgColor: "#F3F7D9" },
  { title: "Doughnut Unicorn", category: "Doughnut", rating: 4, bgColor: "#F3F7D9" },
  { title: "Kathi Kebab", category: "Kebab", rating: 4, bgColor: "#EAEEFA" },
];

export default function TrendingList() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-semibold mb-8">
        Browse Our Trending <p className="text-[#6CBE49]">Receipt</p>
      </h2>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {trending.map((item, index) => (
    <div
      key={index}
      className="rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
      style={{ backgroundColor: item.bgColor}}
    >
      <div className="p-5 h-[120px]">
        <img
          src={`/images/${item.title.toLowerCase().replace(/\s+/g, '')}.svg`}
          alt={item.title}
          className="h-[90px] w-[90px] object-cover rounded-md"
        />
      </div>
      <div className="px-5 pb-5">
        <h3 className="font-semibold text-lg text-black mb-1">{item.title}</h3>
        <p className="text-green-600 text-sm font-medium mb-2">{item.category}</p>
        <div className="text-orange-400 text-sm">
          {'★'.repeat(item.rating)}
          {'☆'.repeat(5 - item.rating)}
        </div>
      </div>
    </div>
  ))}
</div>


      <div className="flex justify-center mt-10">
        <button className="bg-[#6CBE49] text-white font-semibold px-8 py-2 rounded-full hover:bg-green-700 transition cursor-pointer">
          ALL Receipt
        </button>
      </div>
    </section>
  );
}
