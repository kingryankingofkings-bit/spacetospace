import React, { useState, useRef, useEffect } from 'react';
import { useChatStore, ChatChannel } from './chatStore';

export const ChatSystem: React.FC = () => {
  const { messages, activeChannel, isOpen, setActiveChannel, addMessage, toggleChat } = useChatStore();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const channels: (ChatChannel | 'All')[] = ['All', 'Global', 'Local', 'Party', 'System'];

  const filteredMessages = activeChannel === 'All' 
    ? messages 
    : messages.filter(m => m.channel === activeChannel || m.channel === 'System');

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [filteredMessages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Default to 'Global' if 'All' is selected, otherwise use the active channel
    const sendChannel: ChatChannel = activeChannel === 'All' ? 'Global' : activeChannel as ChatChannel;
    
    addMessage({
      sender: 'Player', // In a real app, this would come from a player/auth store
      channel: sendChannel,
      content: inputValue.trim()
    });
    
    setInputValue('');
  };

  const getChannelColor = (channel: ChatChannel) => {
    switch (channel) {
      case 'Global': return '#ffffff';
      case 'Local': return '#a6e22e';
      case 'Party': return '#66d9ef';
      case 'System': return '#fd971f';
      default: return '#ffffff';
    }
  };

  // Minimized state
  if (!isOpen) {
    return (
      <div style={{ position: 'absolute', bottom: 20, left: 20, zIndex: 1000 }}>
        <button 
          onClick={toggleChat}
          style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.6)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Open Chat
        </button>
      </div>
    );
  }

  // Expanded state
  return (
    <div style={{
      position: 'absolute',
      bottom: 20,
      left: 20,
      width: '350px',
      height: '400px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      fontFamily: 'sans-serif',
      color: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      {/* Header / Channel Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #444', padding: '8px', overflowX: 'auto' }}>
        {channels.map(channel => (
          <button
            key={channel}
            onClick={() => setActiveChannel(channel)}
            style={{
              background: activeChannel === channel ? 'rgba(255,255,255,0.2)' : 'transparent',
              border: 'none',
              color: '#fff',
              padding: '4px 8px',
              marginRight: '4px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: activeChannel === channel ? 'bold' : 'normal'
            }}
          >
            {channel}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button onClick={toggleChat} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>—</button>
      </div>

      {/* Messages Area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {filteredMessages.map((msg) => (
          <div key={msg.id} style={{ fontSize: '14px', lineHeight: '1.4' }}>
            <span style={{ color: getChannelColor(msg.channel), fontWeight: 'bold' }}>
              [{msg.channel}] {msg.sender !== 'System' && `${msg.sender}: `}
            </span>
            <span style={{ color: msg.channel === 'System' ? getChannelColor('System') : '#fff' }}>
              {msg.content}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} style={{ display: 'flex', padding: '8px', borderTop: '1px solid #444' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Chat in ${activeChannel === 'All' ? 'Global' : activeChannel}...`}
          style={{
            flex: 1,
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid #555',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: '4px',
            outline: 'none',
            marginRight: '8px'
          }}
        />
        <button type="submit" style={{
          background: '#4CAF50',
          border: 'none',
          color: '#fff',
          padding: '6px 12px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Send
        </button>
      </form>
    </div>
  );
};
