import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      message: 'Hello! Welcome to Nova Luxury Events. How can I help you plan your perfect event today?',
      timestamp: new Date(Date.now() - 60000)
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    'I need help planning a wedding',
    'Corporate event inquiry',
    'What are your packages?',
    'Check availability for my date',
    'Request a quote'
  ];

  useEffect(() => {
    // Simulate online status based on business hours
    const now = new Date();
    const hour = now?.getHours();
    const isBusinessHours = (hour >= 8 && hour <= 20); // 8 AM to 8 PM
    setIsOnline(isBusinessHours);
  }, []);

  const handleSendMessage = (messageText = null) => {
    const message = messageText || newMessage?.trim();
    if (!message) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      message: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = getAgentResponse(message);
      const agentMessage = {
        id: Date.now() + 1,
        sender: 'agent',
        message: agentResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAgentResponse = (userMessage) => {
    const message = userMessage?.toLowerCase();
    
    if (message?.includes('wedding')) {
      return `Thank you for your interest in our wedding planning services! We specialize in creating magical wedding experiences. I'd love to schedule a consultation to discuss your vision. What's your preferred date and guest count?`;
    } else if (message?.includes('corporate')) {
      return `Excellent! We handle all types of corporate events from conferences to product launches. Could you tell me more about the type of corporate event you're planning and your expected attendance?`;
    } else if (message?.includes('package') || message?.includes('price')) {
      return `Our packages are customized based on your specific needs and budget. We offer comprehensive planning starting from KES 50,000. Would you like me to schedule a free consultation to discuss your requirements in detail?`;
    } else if (message?.includes('availability') || message?.includes('date')) {
      return `I'd be happy to check our availability for your event date. Could you please share your preferred date and event type? This will help me provide you with accurate information.`;
    } else if (message?.includes('quote')) {
      return `I'd love to prepare a personalized quote for you! To provide the most accurate estimate, I'll need some details about your event. Shall I connect you with one of our senior planners for a detailed discussion?`;
    } else {
      return `Thank you for reaching out! I'm here to help with all your luxury event planning needs. Feel free to ask about our services, packages, or schedule a consultation. How can I assist you today?`;
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && !e?.shiftKey) {
      e?.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp?.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="default"
          size="lg"
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl luxury-transition"
          iconName="MessageCircle"
        />
        {isOnline && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
      <div className="bg-card border border-border rounded-lg luxury-shadow-modal overflow-hidden">
        {/* Chat Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Icon name="User" size={16} className="text-secondary-foreground" />
              </div>
              {isOnline && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border border-primary" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Nova Events Support</h3>
              <p className="text-xs opacity-90">
                {isOnline ? 'Online now' : 'We\'ll respond soon'}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            iconName="X"
            className="text-primary-foreground hover:bg-primary-foreground/10"
          />
        </div>

        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-surface">
          {messages?.map((msg) => (
            <div
              key={msg?.id}
              className={`flex ${msg?.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  msg?.sender === 'user' ?'bg-primary text-primary-foreground' :'bg-background border border-border'
                }`}
              >
                <p>{msg?.message}</p>
                <p className={`text-xs mt-1 opacity-70`}>
                  {formatTime(msg?.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-background border border-border px-3 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies */}
        {messages?.length === 1 && (
          <div className="p-4 border-t border-border bg-background">
            <p className="text-xs text-muted-foreground mb-2">Quick replies:</p>
            <div className="space-y-2">
              {quickReplies?.slice(0, 3)?.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(reply)}
                  className="w-full text-left text-xs p-2 bg-accent hover:bg-accent/80 rounded-md luxury-transition"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Input */}
        <div className="p-4 border-t border-border bg-background">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e?.target?.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              disabled={!isOnline}
            />
            <Button
              variant="default"
              size="sm"
              onClick={() => handleSendMessage()}
              disabled={!newMessage?.trim() || !isOnline}
              iconName="Send"
            />
          </div>
          {!isOnline && (
            <p className="text-xs text-muted-foreground mt-2">
              We're currently offline. Leave a message and we'll respond within 2 hours.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveChat;