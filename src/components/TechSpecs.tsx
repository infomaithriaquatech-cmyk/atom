export default function TechSpecs() {
  const specs = [
    { label: 'Model', value: 'Meghdoot® Atom' },
    { label: 'Rated Capacity', value: '20 Litres/day' },
    { label: 'Power Consumption', value: '0.4 kWh' },
    { label: 'Tank Capacity', value: '8 Litres' },
    { label: 'Power Supply', value: '1-Phase, 230V AC, 50/60 Hz' },
    { label: 'Dimensions (LxWxH)', value: '290 x 400 x 1180 mm' },
    { label: 'Weight', value: '38 kg' },
    { label: 'Optimal Conditions', value: '90°F, 80% RH' },
  ];

  return (
    <section id="specs" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Technical Specifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engineered for performance, designed for reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 transition-colors"
              >
                <span className="font-semibold text-gray-700">{spec.label}</span>
                <span className="text-gray-900 font-medium text-right">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-xl">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">20L</div>
                  <div className="text-gray-600">Daily Water Production</div>
                </div>

                <div className="h-px bg-gray-200"></div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">8L</div>
                    <div className="text-sm text-gray-600">Tank Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">0.4</div>
                    <div className="text-sm text-gray-600">kWh Power</div>
                  </div>
                </div>

                <div className="h-px bg-gray-200"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">UV Filtration</span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Multi-Stage Filtration</span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Mineral Cartridge</span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
