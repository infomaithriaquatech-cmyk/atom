export default function Hero() {
  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              Revolutionary Technology
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Meghdoot<sup className="text-2xl">®</sup>
            <br />
            <span className="text-blue-600">Atom 2.0</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pure, Safe & Healthy drinking water from air. Experience the future of water harvesting with our revolutionary air to water technology.
          </p>

          <div className="flex items-baseline gap-4">
            <div>
              <span className="text-4xl font-bold text-gray-900">₹99,999</span>
              <span className="text-2xl text-gray-400 line-through ml-3">₹1,20,000</span>
            </div>
            
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToOrder}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
            >
              Buy Now
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition"
            >
              Learn More
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-gray-900">20L</div>
              <div className="text-sm text-gray-600">Per Day</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Pure Water</div>
            </div><div className="
            "></div>           
          </div>
        </div>

        <div className="relative animate-fade-in-right">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
          <img
            src="/Gemini_Generated_Image_fe9ctkfe9ctkfe9c.png"
            alt="Meghdoot Atom"
            className="relative w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
