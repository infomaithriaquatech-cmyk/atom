import { Wind, Filter, Droplet, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Wind,
      title: 'Air Intake',
      description: 'Atmospheric air is drawn into the system through advanced intake filters that remove dust and large particles.',
      step: '01',
    },
    {
      icon: Droplet,
      title: 'Condensation',
      description: 'Air is cooled to dew point, causing moisture to condense into pure water droplets using energy-efficient technology.',
      step: '02',
    },
    {
      icon: Filter,
      title: 'Multi-Stage Filtration',
      description: 'Water passes through UV filtration, mineral cartridge, and multi-stage filters to ensure absolute purity.',
      step: '03',
    },
    {
      icon: Sparkles,
      title: 'Mineralization & Storage',
      description: 'Essential minerals are added for taste and health benefits. Pure water is stored in an 8L tank, ready to drink.',
      step: '04',
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From air to pure water in four simple steps. Science meets innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent -z-10"></div>
              )}

              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 h-full hover:shadow-xl">
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>

                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 md:p-16 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">The Science Behind Pure Water</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Our patented atmospheric water generation technology mimics the natural water cycle, extracting moisture from air and purifying it through advanced filtration systems. The result is water that's purer than most bottled water brands.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold mb-1">99.9% Pure</div>
                    <div className="text-blue-100 text-sm">Free from contaminants, chemicals, and microbes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold mb-1">Mineral Enriched</div>
                    <div className="text-blue-100 text-sm">Essential minerals added for health and taste</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold mb-1">Sustainable</div>
                    <div className="text-blue-100 text-sm">No plastic waste, no water scarcity concerns</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-blue-200 mb-2">Water Quality</div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full w-[99%]"></div>
                    </div>
                    <div className="text-right text-2xl font-bold mt-2">99.9%</div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-2">Energy Efficiency</div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full w-[95%]"></div>
                    </div>
                    <div className="text-right text-2xl font-bold mt-2">95%</div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-2">Sustainability</div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full w-full"></div>
                    </div>
                    <div className="text-right text-2xl font-bold mt-2">100%</div>
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
