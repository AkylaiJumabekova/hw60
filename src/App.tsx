import React, { useState, useEffect } from 'react';
import MessageList from './components/MessageList/MessageList';
import { Message } from './types';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastDateTime, setLastDateTime] = useState<string | null>(null);

  const fetchMessages = async () => {
    let url = 'http://146.185.154.90:8000/messages';
    if (lastDateTime) {
      url += `?datetime=${encodeURIComponent(lastDateTime)}`;
    }
    const response = await fetch(url);
    const newMessages: Message[] = await response.json();
    if (newMessages.length > 0) {
      setLastDateTime(newMessages[newMessages.length - 1].datetime);
      setMessages((prev) => [...prev, ...newMessages]);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, [lastDateTime]);

  return (
    <div className="bg-success d-flex align-items-center justify-content-center min-vh-100">
      <div className="container mt-5 p-3 bg-light text-dark">
        <MessageList messages={messages} />
      </div>
    </div>
  );
};

export default App;
