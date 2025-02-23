'use client';

import { useEffect, useState } from 'react';

const MessagePage = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Message from API</h1>
      <p>{message}</p>
    </div>
  );
};

export default MessagePage;