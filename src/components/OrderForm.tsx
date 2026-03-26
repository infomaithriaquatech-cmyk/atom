import { useState } from 'react';
import { ShoppingCart, CreditCard, Check, Zap } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function OrderForm() {
  const [paymentType, setPaymentType] = useState<'full_payment' | 'book_now'>('full_payment');
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const fullPrice = 99999;
  const bookNowAmount = 20000;
  const remainingAmount = fullPrice - bookNowAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const paymentAmount = paymentType === 'full_payment' ? fullPrice : bookNowAmount;
      const remaining = paymentType === 'full_payment' ? 0 : remainingAmount;

      const { error: submitError } = await supabase
        .from('orders')
        .insert([{
          ...formData,
          product_name: 'Meghdoot Atom',
          price: fullPrice,
          payment_type: paymentType,
          payment_amount: paymentAmount,
          remaining_amount: remaining,
          status: 'pending',
        }]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
      });
    } catch (err) {
      setError('Failed to submit order. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Reserve Your Meghdoot Atom</h2>
          <p className="text-xl text-gray-600">
            Limited time offer. Secure your water harvesting device today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white sticky top-24">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Meghdoot Atom</h3>
                <p className="text-blue-100">Revolutionary Air-to-Water Purifier</p>
              </div>

              <div className="h-px bg-white/20"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-300" />
                  <span>20L daily water production</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-300" />
                  <span>100% pure water from air</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-300" />
                  <span>1-year warranty included</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-300" />
                  <span>Free installation support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-300" />
                  <span>Multi-stage filtration</span>
                </div>
              </div>

              <div className="h-px bg-white/20"></div>

              <div>
                <div className="text-sm text-blue-200 mb-2">Original Price</div>
                <div className="text-2xl line-through text-blue-200 mb-4">₹1,20,000</div>
                <div className="text-sm text-blue-200 mb-2">Special Offer Price</div>
                <div className="text-5xl font-bold mb-2">₹99,999</div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span className="font-semibold text-sm">Pay Full Now</span>
                  </div>
                  <div className="text-2xl font-bold">₹99,999</div>
                  <p className="text-xs text-blue-100 mt-2">Ship immediately after payment</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-5 h-5 text-green-300" />
                    <span className="font-semibold text-sm">Book Now, Pay Later</span>
                  </div>
                  <div className="text-xl font-bold">₹20,000 now</div>
                  <div className="text-sm text-blue-100 mt-2">₹79,999 before shipping</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6" />
                  <span className="font-semibold">Secure Payment</span>
                </div>
                <p className="text-sm text-blue-100">
                  Your payment information is encrypted and secure. We accept all major payment methods.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Order Received!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for your order. Our team will contact you shortly to arrange payment and delivery.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Place Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Choose Payment Plan</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <button
                      type="button"
                      onClick={() => setPaymentType('full_payment')}
                      className={`p-6 rounded-2xl border-2 transition-all ${
                        paymentType === 'full_payment'
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 bg-white hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            paymentType === 'full_payment'
                              ? 'border-blue-600 bg-blue-600'
                              : 'border-gray-300'
                          }`}
                        >
                          {paymentType === 'full_payment' && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg mb-1">Buy Now</div>
                          <div className="text-2xl font-bold text-blue-600">₹99,999</div>
                          <div className="text-xs text-gray-600 mt-2">
                            Pay full amount. Immediate shipping.
                          </div>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentType('book_now')}
                      className={`p-6 rounded-2xl border-2 transition-all ${
                        paymentType === 'book_now'
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 bg-white hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            paymentType === 'book_now'
                              ? 'border-blue-600 bg-blue-600'
                              : 'border-gray-300'
                          }`}
                        >
                          {paymentType === 'book_now' && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg mb-1">Book Now</div>
                          <div className="text-2xl font-bold text-green-600">₹20,000</div>
                          <div className="text-xs text-gray-600 mt-2">
                            Pay 20% now, 80% before shipping
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Order Information</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.customer_name}
                      onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.customer_email}
                      onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.customer_phone}
                    onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Delivery Address *</label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition resize-none"
                    placeholder="Street address, apartment, suite, etc."
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
                      placeholder="123456"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl">
                    {error}
                  </div>
                )}

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="text-sm text-gray-700">
                    By placing this order, you agree to our terms and conditions. Our team will contact you to arrange payment and schedule delivery within 24 hours.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                >
                  {loading ? 'Processing...' : (
                    <>
                      <ShoppingCart className="w-6 h-6" />
                      {paymentType === 'full_payment' ? 'Buy Now' : 'Book Now'}
                    </>
                  )}
                </button>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-center">
                  <div className="text-sm text-gray-700">
                    {paymentType === 'full_payment' ? (
                      <>
                        <div className="font-semibold mb-1">Full Payment</div>
                        <div>Pay ₹99,999 now. Instant shipping.</div>
                      </>
                    ) : (
                      <>
                        <div className="font-semibold mb-1">Flexible Payment</div>
                        <div>Pay ₹20,000 now, ₹79,999 before shipping.</div>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-center text-sm text-gray-500">
                  Secure checkout. Your information is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
