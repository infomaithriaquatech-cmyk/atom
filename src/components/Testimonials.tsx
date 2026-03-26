import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'Homeowner, Delhi',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The Meghdoot Atom has been a game-changer for our family. No more worrying about water quality. The installation was incredibly easy and the water taste is noticeably better than our previous purifier.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      title: 'IT Professional, Bangalore',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Love the IoT features! I can monitor everything from my phone. The energy consumption is minimal and the investment has already paid off compared to buying bottled water.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      title: 'Business Owner, Mumbai',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Outstanding product quality and customer support. The purifier works flawlessly even in our humid climate. Worth every rupee. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Neha Gupta',
      title: 'Doctor, Pune',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'As a health professional, I appreciate the scientific approach behind this water purifier. The 99.9% purity is impressive and my family loves the mineral-enriched water.',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      title: 'Corporate Executive, Hyderabad',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The futuristic design looks amazing in our office pantry. Employees love it and it\'s a great conversation starter. Plus, zero maintenance headaches!',
      rating: 5,
    },
    {
      name: 'Anjali Mishra',
      title: 'Environmentalist, Kolkata',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Finally, a water solution that doesn\'t generate plastic waste! This product aligns perfectly with my sustainability goals. Phenomenal innovation!',
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Loved by Customers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from people who've transformed their water quality and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
