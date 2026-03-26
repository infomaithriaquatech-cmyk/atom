import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TechSpecs from './components/TechSpecs';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <TechSpecs />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <OrderForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
