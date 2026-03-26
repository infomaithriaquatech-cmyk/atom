import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! 👋 Welcome to Meghdoot Atom support. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    price: 'The Meghdoot Atom is priced at ₹99,999 (Special offer from ₹1,20,000). We also offer flexible payment options: Book Now for ₹20,000 upfront and pay the remaining ₹79,999 before shipping!',
    capacity: 'The Meghdoot Atom can generate up to 20 liters of pure drinking water per day under optimal conditions (15-35°C and 80% humidity).',
    installation:
      'Installation is very simple! Just place the unit near a power outlet and plug it in. No plumbing required. We provide free installation support.',
    water:
      'Water goes through UV filtration, multi-stage purification, and mineral enrichment. The result is 99.9% pure water with essential minerals added for taste and health.',
    warranty: 'The Meghdoot Atom comes with a comprehensive 2-year warranty covering manufacturing defects and parts. Extended warranty is available.',
    maintenance:
      'Minimal maintenance required! The IoT system alerts you when filters need replacement (typically every 6-12 months). We provide replacement cartridges.',
    power: 'Power consumption is only 0.4 kWh, which costs approximately ₹3-4 per day depending on your local electricity rates.',
    climate:
      'Works best in 15-45°C temperature and 25-100% humidity. While it produces more water in humid climates, it functions efficiently everywhere.',
    default:
      "Great question! For detailed information, please check our FAQ section or contact our team. Would you like help with anything else? You can ask about price, capacity, installation, water quality, warranty, maintenance, power consumption, or climate requirements.",
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('price') || message.includes('cost'))
      return botResponses.price;
    if (message.includes('capacity') || message.includes('liters'))
      return botResponses.capacity;
    if (
      message.includes('install') ||
      message.includes('setup') ||
      message.includes('plumbing')
    )
      return botResponses.installation;
    if (
      message.includes('water') ||
      message.includes('pure') ||
      message.includes('quality')
    )
      return botResponses.water;
    if (message.includes('warranty') || message.includes('guarantee'))
      return botResponses.warranty;
    if (
      message.includes('maintain') ||
      message.includes('filter') ||
      message.includes('service')
    )
      return botResponses.maintenance;
    if (message.includes('power') || message.includes('electricity'))
      return botResponses.power;
    if (message.includes('climate') || message.includes('humidity'))
      return botResponses.climate;

    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-40 border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Meghdoot Atom Support</h3>
              <p className="text-xs text-blue-100">Typically replies instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-800 p-1 rounded transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-600 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-2 rounded-full transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Ask about price, capacity, installation, features, and more!
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        title="Chat with us"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </>
  );
}
