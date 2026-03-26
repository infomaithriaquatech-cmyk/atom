import { Droplets, Shield, Zap, Wifi, Thermometer, Wind } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Droplets,
      title: '100% Pure Water from Air',
      description: 'Advanced atmospheric water generation technology extracts moisture from air and converts it into pure, mineralized drinking water.',
    },
    {
      icon: Shield,
      title: 'Multi-Stage Filtration',
      description: 'Proprietary filtration system with UV sterilization ensures water is microbe-free and perfectly safe for consumption.',
    },
    {
      icon: Wind,
      title: 'Plug & Play',
      description: 'No plumbing required. Simply plug it in and start producing pure water within hours.',
    },
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Revolutionary Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience next-generation water purification technology designed for modern living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/Gemini_Generated_Image_m4vjk8m4vjk8m4vj.png"
              alt="Living room setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/Gemini_Generated_Image_y2glfby2glfby2gl.png"
              alt="Kitchen setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/Gemini_Generated_Image_fe9ctkfe9ctkfe9c.png"
              alt="Home setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
