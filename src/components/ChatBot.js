import React, { useState, useRef, useEffect } from 'react';
import { schoolAssistant } from '../services/temboClient';
import './ChatBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! 👋 I\'m your Honey Flower School AI assistant. How can I help you today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { label: 'Admissions', value: 'admissions' },
    { label: 'Fees', value: 'fees' },
    { label: 'Schedule', value: 'schedule' },
    { label: 'Contact', value: 'contact' },
    { label: 'Exams', value: 'exams' },
    { label: 'Holidays', value: 'holidays' }
  ];

  const handleQuickReply = async (topic) => {
    const userMessage = quickReplies.find(r => r.value === topic)?.label || topic;
    
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(async () => {
      const response = await schoolAssistant.getSchoolInfo(topic);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsTyping(true);

    // Check if it's a quick reply topic
    const topic = userMessage.toLowerCase();
    let response;

    if (topic.includes('admission') || topic.includes('apply')) {
      response = await schoolAssistant.getSchoolInfo('admissions');
    } else if (topic.includes('fee') || topic.includes('cost') || topic.includes('tuition')) {
      response = await schoolAssistant.getSchoolInfo('fees');
    } else if (topic.includes('schedule') || topic.includes('time') || topic.includes('hours')) {
      response = await schoolAssistant.getSchoolInfo('schedule');
    } else if (topic.includes('contact') || topic.includes('phone') || topic.includes('email')) {
      response = await schoolAssistant.getSchoolInfo('contact');
    } else if (topic.includes('exam') || topic.includes('test')) {
      response = await schoolAssistant.getSchoolInfo('exams');
    } else if (topic.includes('holiday') || topic.includes('vacation') || topic.includes('break')) {
      response = await schoolAssistant.getSchoolInfo('holidays');
    } else {
      // For complex queries, use Tembo AI
      const result = await schoolAssistant.askQuestion(userMessage);
      if (result.success) {
        response = 'I\'ve submitted your question to our advanced AI system. For immediate assistance, please contact our office at (555) 123-4567 or email info@honeyflowerschool.edu';
      } else {
        response = 'I\'m here to help! You can ask me about admissions, fees, schedule, contact information, exams, or holidays. For other questions, please contact our office.';
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">🤖</div>
              <div className="chatbot-title">
                <h3>School Assistant</h3>
                <p>Powered by Tembo AI</p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-avatar">
                  {message.type === 'bot' ? '🤖' : '👤'}
                </div>
                <div className="message-content">{message.text}</div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="message-avatar">🤖</div>
                <div className="message-content typing-indicator">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="quick-replies">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(reply.value)}
                >
                  {reply.label}
                </button>
              ))}
            </div>
          )}

          <form className="chatbot-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button type="submit" className="send-btn" disabled={isTyping || !inputValue.trim()}>
              ➤
            </button>
          </form>
        </div>
      )}

      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        {isOpen ? '×' : '💬'}
      </button>
    </div>
  );
}

export default ChatBot;
