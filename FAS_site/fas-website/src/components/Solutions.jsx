
const solutions = [
  {
    title: "Public Safety & Rescue",
    description: "Equipping first responders with thermal imaging and high-zoom capabilities to save lives in Kazakhstan's most challenging terrains.",
    image: "https://images.unsplash.com/photo-1591768793355-74d7c503529a?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  },
  {
    title: "Infrastructure Inspection",
    description: "Automated flight paths for high-precision bridge, power line, and industrial inspections, reducing risk and increasing efficiency.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  }
];

export default function Solutions() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Industry <span className="text-blue-800">Solutions</span>
          </h2>
          <div className="h-1 bg-blue-800 mt-4"></div>
        </div>

        <div className="space-y-32">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-12 items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-white font-bold group">
                  <span className="border-b-2 border-blue-800 py-1 uppercase text-sm tracking-widest">
                    View Enterprise Case
                  </span>
                  <span className="transition-transform group-hover:translate-x-2 text-blue-800">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}