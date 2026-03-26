import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the Meghdoot Atom generate water from air?',
      answer: 'The Meghdoot Atom uses advanced atmospheric water generation technology. It draws in air, cools it to the dew point to condense moisture, then purifies the water through multiple filtration stages including UV sterilization and mineral enrichment. This process mimics the natural water cycle.',
    },
    {
      question: 'How much water can it produce daily?',
      answer: 'The Meghdoot Atom can produce up to 20 liters of pure drinking water per day under optimal conditions (15-35°C temperature and 80% humidity). Production may vary based on ambient temperature and humidity levels.',
    },
    {
      question: 'What is the power consumption?',
      answer: 'The system consumes only 0.4 kWh of electricity, making it highly energy-efficient. This translates to approximately ₹3-4 per day in electricity costs, depending on your local electricity rates.',
    },
    {
      question: 'Does it require any installation or plumbing?',
      answer: 'No! The Meghdoot Atom is a plug-and-play device. Simply place it in your desired location, plug it into a standard electrical outlet, and it will start producing water. No plumbing, pipes, or professional installation required.',
    },
    {
      question: 'Is the water safe to drink?',
      answer: 'Absolutely! The water goes through UV filtration, multi-stage purification, and mineral enrichment. It is 99.9% pure, free from contaminants, microbes, and chemicals. The quality often exceeds bottled water standards.',
    },
    {
      question: 'What maintenance is required?',
      answer: 'Minimal maintenance is required. The IoT-enabled system alerts you when filters need replacement (typically every 6-12 months depending on usage). The mineral cartridge can be customized based on your requirements.',
    },
    {
      question: 'Will it work in all climates?',
      answer: 'The Meghdoot Atom operates efficiently in temperatures ranging from 15-45°C and humidity levels of 25-100% RH. While it works best in moderate to high humidity environments, it can still function in drier climates with adjusted output.',
    },
    {
      question: 'What is included in the warranty?',
      answer: 'The Meghdoot Atom comes with a comprehensive 2-year warranty covering manufacturing defects and parts. Extended warranty options are available at the time of purchase.',
    },
    {
      question: 'How is this better than buying bottled water?',
      answer: 'Over time, the Meghdoot Atom is more economical and environmentally friendly than bottled water. It eliminates plastic waste, ensures consistent water quality, and provides fresh water on-demand. The system typically pays for itself within 1-2 years.',
    },
    {
      question: 'Can I monitor the device remotely?',
      answer: 'Yes! The IoT-enabled system allows you to track water production, quality parameters, filter life, and maintenance schedules through a mobile app. You receive alerts and can monitor performance from anywhere.',
    },
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Meghdoot Atom.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-blue-500 transition-colors overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-8 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">
            Our team is here to help you make the right decision.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
