import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatBox.css';
const Chatbox = ({ senderId, receiverId }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Fetch chat history when component mounts
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get(`/api/chat/history/${senderId}/${receiverId}`);
      setChatHistory(response.data);
    } catch (error) {
      console.error('Failed to fetch chat history:', error);
    }
  };

  const sendMessage = async () => {
    if (message.trim() === '') return;

    try {
      const response = await axios.post('/api/chat/send', {
        sender: senderId,
        receiver: receiverId,
        content: message,
      });
      const newMessage = response.data;
      setChatHistory([...chatHistory, newMessage]);
      setMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className="chatbox-container">
      <div className="message-container">
        {chatHistory.map((message) => (
          <div
            key={message._id}
            className={`message ${message.sender._id === senderId ? 'sent' : 'received'}`}
          >
            {message.sender._id !== senderId && <strong>{message.sender.username}: </strong>}
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );

};

export default Chatbox;
