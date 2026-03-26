import { Check, X } from 'lucide-react';

export default function Comparison() {
  const comparisons = [
    {
      feature: 'Water Source',
      atom: 'Atmospheric moisture (unlimited)',
      traditional: 'Ground Water / Tap Water (limited)',
      atomBetter: true,
    },
    {
      feature: 'Installation',
      atom: 'Plug & play, no plumbing',
      traditional: 'Requires water connection',
      atomBetter: true,
    },
    {
      feature: 'Water Quality',
      atom: '99.9% pure, mineral enriched',
      traditional: 'Depends on source water',
      atomBetter: true,
    },
    {
      feature: 'Maintenance',
      atom: 'Minimal',
      traditional: 'Regular filter changes',
      atomBetter: true,
    },
    {
      feature: 'Environmental Impact',
      atom: 'Zero plastic waste',
      traditional: 'Plastic filters, water waste',
      atomBetter: true,
    },
    {
      feature: 'Daily Capacity',
      atom: '20 liters',
      traditional: 'Unlimited (if water available)',
      atomBetter: false,
    },
  
    {
      feature: 'Portability',
      atom: 'Works anywhere',
      traditional: 'Requires water connection',
      atomBetter: true,
    },
    
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Beyond Traditional Purifiers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how Meghdoot Atom revolutionizes water purification compared to conventional systems.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <div className="font-semibold text-lg">Feature</div>
            <div className="font-semibold text-lg text-center">Meghdoot Atom</div>
            <div className="font-semibold text-lg text-center">Traditional Purifiers</div>
          </div>

          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-6 items-center ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-blue-50 transition-colors`}
            >
              <div className="font-medium text-gray-900">{item.feature}</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                  {item.atomBetter && <Check className="w-4 h-4" />}
                  {item.atom}
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
                  {item.atomBetter && <X className="w-4 h-4 text-gray-400" />}
                  {item.traditional}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border-2 border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-900 font-semibold mb-2">Advantages</div>
            <div className="text-gray-600 text-sm">Over traditional purification systems</div>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-teal-200">
            <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
            <div className="text-gray-900 font-semibold mb-2">Eco-Friendly</div>
            <div className="text-gray-600 text-sm">Zero plastic waste generation</div>
          </div>
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-900 font-semibold mb-2">Plumbing Needed</div>
            <div className="text-gray-600 text-sm">Completely independent system</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
